import { PrismaClient } from '@prisma/client';
import { dbtModules } from './dbt-seed-data';

const prisma = new PrismaClient();

/**
 * Seeds the database with DBT content
 */
async function main() {
  console.log('Starting to seed DBT content...');

  // Create the modules
  for (const moduleData of dbtModules) {
    console.log(`Creating module: ${moduleData.name}`);
    
    const module = await prisma.module.create({
      data: {
        name: moduleData.name,
        description: moduleData.description,
        orderIndex: moduleData.orderIndex,
        imageUrl: moduleData.imageUrl,
        isActive: true,
      },
    });

    // Create the skills for this module
    if (moduleData.skills) {
      for (const skillData of moduleData.skills) {
        console.log(`  Creating skill: ${skillData.name}`);
        
        const skill = await prisma.skill.create({
          data: {
            moduleId: module.id,
            name: skillData.name,
            description: skillData.description,
            orderIndex: skillData.orderIndex,
            imageUrl: skillData.imageUrl,
            isAdvanced: skillData.isAdvanced || false,
            isActive: true,
          },
        });

        // Create the lessons for this skill
        if (skillData.lessons) {
          for (const lessonData of skillData.lessons) {
            console.log(`    Creating lesson: ${lessonData.name}`);
            
            const lesson = await prisma.lesson.create({
              data: {
                skillId: skill.id,
                name: lessonData.name,
                description: lessonData.description,
                orderIndex: lessonData.orderIndex,
                xpReward: lessonData.xpReward,
                isActive: true,
              },
            });

            // Create the exercises for this lesson
            if (lessonData.exercises) {
              for (const exerciseData of lessonData.exercises) {
                console.log(`      Creating exercise: ${exerciseData.question.substring(0, 30)}...`);
                
                await prisma.exercise.create({
                  data: {
                    lessonId: lesson.id,
                    type: exerciseData.type,
                    question: exerciseData.question,
                    correctAnswer: exerciseData.correctAnswer,
                    options: exerciseData.options,
                    explanation: exerciseData.explanation,
                    difficultyLevel: exerciseData.difficultyLevel,
                    isActive: true,
                  },
                });
              }
            }
          }
        }
      }
    }
  }

  console.log('DBT content seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding DBT content:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { Exercise, Lesson, Module, Skill } from '../types';

/**
 * Repository interface for reading learning content data.
 */
export interface ILearningReadRepository {
  /**
   * Get all modules.
   */
  getAllModules(): Promise<Module[]>;
  
  /**
   * Get a module by ID.
   * @param id The ID of the module
   */
  getModuleById(id: string): Promise<Module | null>;
  
  /**
   * Get all skills for a module.
   * @param moduleId The ID of the module
   */
  getSkillsByModuleId(moduleId: string): Promise<Skill[]>;
  
  /**
   * Get a skill by ID.
   * @param id The ID of the skill
   */
  getSkillById(id: string): Promise<Skill | null>;
  
  /**
   * Get all lessons for a skill.
   * @param skillId The ID of the skill
   */
  getLessonsBySkillId(skillId: string): Promise<Lesson[]>;
  
  /**
   * Get a lesson by ID.
   * @param id The ID of the lesson
   */
  getLessonById(id: string): Promise<Lesson | null>;
  
  /**
   * Get all exercises for a lesson.
   * @param lessonId The ID of the lesson
   */
  getExercisesByLessonId(lessonId: string): Promise<Exercise[]>;
  
  /**
   * Get an exercise by ID.
   * @param id The ID of the exercise
   */
  getExerciseById(id: string): Promise<Exercise | null>;
}

/**
 * Repository interface for writing learning content data.
 */
export interface ILearningWriteRepository {
  /**
   * Create a new module.
   * @param module The module data
   */
  createModule(module: Omit<Module, 'id' | 'createdAt' | 'updatedAt'>): Promise<Module>;
  
  /**
   * Update a module.
   * @param id The ID of the module to update
   * @param module The module data to update
   */
  updateModule(id: string, module: Partial<Omit<Module, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Module>;
  
  /**
   * Create a new skill.
   * @param skill The skill data
   */
  createSkill(skill: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>): Promise<Skill>;
  
  /**
   * Update a skill.
   * @param id The ID of the skill to update
   * @param skill The skill data to update
   */
  updateSkill(id: string, skill: Partial<Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Skill>;
  
  /**
   * Create a new lesson.
   * @param lesson The lesson data
   */
  createLesson(lesson: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lesson>;
  
  /**
   * Update a lesson.
   * @param id The ID of the lesson to update
   * @param lesson The lesson data to update
   */
  updateLesson(id: string, lesson: Partial<Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Lesson>;
  
  /**
   * Create a new exercise.
   * @param exercise The exercise data
   */
  createExercise(exercise: Omit<Exercise, 'id' | 'createdAt' | 'updatedAt'>): Promise<Exercise>;
  
  /**
   * Update an exercise.
   * @param id The ID of the exercise to update
   * @param exercise The exercise data to update
   */
  updateExercise(id: string, exercise: Partial<Omit<Exercise, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Exercise>;
}

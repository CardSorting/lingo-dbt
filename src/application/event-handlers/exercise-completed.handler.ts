import { IEventHandler } from '../../core/events/event-bus.interface';
import { ExerciseCompletedEvent } from '../../core/events/exercise-completed.event';
import { IProgressReadRepository, IProgressWriteRepository } from '../../core/repositories/progress-repository.interface';

/**
 * Handler for the ExerciseCompletedEvent.
 * Updates user achievements and performs additional actions after an exercise is completed.
 */
export class ExerciseCompletedEventHandler implements IEventHandler<ExerciseCompletedEvent> {
  constructor(
    private progressReadRepository: IProgressReadRepository,
    private progressWriteRepository: IProgressWriteRepository
  ) {}

  /**
   * Handle the event.
   * @param event The exercise completed event
   */
  async handle(event: ExerciseCompletedEvent): Promise<void> {
    const { userId, exerciseId, lessonId, skillId, moduleId, isCorrect } = event;

    try {
      // If the exercise was completed correctly
      if (isCorrect) {
        // Check for any achievements to award
        await this.checkAndAwardAchievements(userId, moduleId, skillId, lessonId);
      }
      
      // Log completion for analytics purposes
      console.log(`User ${userId} completed exercise ${exerciseId} with result: ${isCorrect ? 'correct' : 'incorrect'}`);
    } catch (error) {
      console.error(`Error processing exercise completion for user ${userId}, exercise ${exerciseId}:`, error);
    }
  }

  /**
   * Check for and award any achievements the user has earned.
   */
  private async checkAndAwardAchievements(
    userId: string,
    moduleId: string,
    skillId: string,
    lessonId: string
  ): Promise<void> {
    // Example achievements to check:
    
    // 1. Check if user completed all exercises in the lesson
    const lessonProgress = await this.progressReadRepository.getLessonProgress(userId, lessonId);
    if (lessonProgress?.isCompleted) {
      // Award lesson completion achievement
      // (This would be implemented in a real system)
    }

    // 2. Check if user completed all lessons in the skill
    const skillProgress = await this.progressReadRepository.getSkillProgress(userId, skillId);
    // Implement skill mastery achievement logic here

    // 3. Check for streak-based achievements
    const userProgress = await this.progressReadRepository.getUserProgress(userId);
    if (userProgress) {
      // Award streak achievements
      if (userProgress.currentStreak === 7) {
        // Award "One Week Streak" achievement
      } else if (userProgress.currentStreak === 30) {
        // Award "One Month Streak" achievement
      }
    }

    // In a real implementation, we'd have more sophisticated achievement logic
    // and would interact with an achievement service or repository
  }
}

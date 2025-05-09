import { 
  IExerciseAttemptWriteRepository 
} from '../../core/repositories/progress-repository.interface';
import { IUserProgressWriteRepository } from '../../core/repositories/progress-repository.interface';
import { ILessonProgressWriteRepository } from '../../core/repositories/progress-repository.interface';
import { IExerciseReadRepository } from '../../core/repositories/learning-repository.interface';

export interface CompleteExerciseCommand {
  userId: string;
  lessonProgressId: string;
  exerciseId: string;
  userAnswer: string;
}

export class CompleteExerciseCommandHandler {
  constructor(
    private exerciseAttemptWriteRepository: IExerciseAttemptWriteRepository,
    private exerciseReadRepository: IExerciseReadRepository,
    private lessonProgressWriteRepository: ILessonProgressWriteRepository,
    private userProgressWriteRepository: IUserProgressWriteRepository
  ) {}

  async execute(command: CompleteExerciseCommand): Promise<{ 
    isCorrect: boolean; 
    xpEarned: number;
    isLessonCompleted: boolean;
  }> {
    const { userId, lessonProgressId, exerciseId, userAnswer } = command;

    // Get the exercise to check the correct answer
    const exercise = await this.exerciseReadRepository.findById(exerciseId);
    if (!exercise) {
      throw new Error('Exercise not found');
    }

    // Check if the answer is correct
    const isCorrect = this.checkAnswer(exercise.correctAnswer, userAnswer);

    // Create the exercise attempt
    await this.exerciseAttemptWriteRepository.create({
      lessonProgressId,
      exerciseId,
      isCorrect,
      userAnswer,
      attemptedAt: new Date()
    });

    // Increment the attempt count for this lesson
    await this.lessonProgressWriteRepository.incrementAttemptCount(lessonProgressId);

    // If the answer is correct, add XP to the user
    let xpEarned = 0;
    if (isCorrect) {
      // Award more XP for higher difficulty levels
      xpEarned = 10 * exercise.difficultyLevel;
      await this.userProgressWriteRepository.addXp(userId, xpEarned);
      
      // Update the streak
      await this.userProgressWriteRepository.updateStreak(userId);
    }

    // Determine if the lesson is completed (in a real implementation, 
    // we would check if all required exercises are completed)
    const isLessonCompleted = isCorrect;
    if (isLessonCompleted) {
      await this.lessonProgressWriteRepository.markAsCompleted(lessonProgressId);
    }

    return {
      isCorrect,
      xpEarned,
      isLessonCompleted
    };
  }

  private checkAnswer(correctAnswer: string, userAnswer: string): boolean {
    // Simple string comparison for now - could be extended with more sophisticated
    // comparison logic depending on exercise type
    return correctAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase();
  }
}

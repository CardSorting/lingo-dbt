import { ExerciseAttempt, LessonProgress, ModuleProgress, SkillProgress, UserProgress } from '../types';

/**
 * Repository interface for reading progress data.
 */
export interface IProgressReadRepository {
  /**
   * Get a user's progress.
   * @param userId The ID of the user
   */
  getUserProgress(userId: string): Promise<UserProgress | null>;
  
  /**
   * Get a user's progress for a specific module.
   * @param userId The ID of the user
   * @param moduleId The ID of the module
   */
  getModuleProgress(userId: string, moduleId: string): Promise<ModuleProgress | null>;
  
  /**
   * Get a user's progress for a specific skill.
   * @param userId The ID of the user
   * @param skillId The ID of the skill
   */
  getSkillProgress(userId: string, skillId: string): Promise<SkillProgress | null>;
  
  /**
   * Get a user's progress for a specific lesson.
   * @param userId The ID of the user
   * @param lessonId The ID of the lesson
   */
  getLessonProgress(userId: string, lessonId: string): Promise<LessonProgress | null>;

  /**
   * Get all exercise attempts for a specific lesson progress.
   * @param lessonProgressId The ID of the lesson progress
   */
  getExerciseAttempts(lessonProgressId: string): Promise<ExerciseAttempt[]>;
}

/**
 * Repository interface for writing progress data.
 */
export interface IProgressWriteRepository {
  /**
   * Create initial user progress for a new user.
   * @param userId The ID of the user
   */
  createUserProgress(userId: string): Promise<UserProgress>;
  
  /**
   * Update a user's XP by adding the specified amount.
   * @param userId The ID of the user
   * @param xpAmount The amount of XP to add
   */
  addUserXp(userId: string, xpAmount: number): Promise<UserProgress>;
  
  /**
   * Update a user's streak.
   * Increments the current streak if the user was active yesterday or resets it if the streak was broken.
   * @param userId The ID of the user
   */
  updateUserStreak(userId: string): Promise<UserProgress>;
  
  /**
   * Get or create lesson progress for a user.
   * @param userId The ID of the user
   * @param lessonId The ID of the lesson
   * @param skillId The ID of the skill that contains the lesson
   * @param moduleId The ID of the module that contains the skill
   */
  getOrCreateLessonProgress(
    userId: string,
    lessonId: string,
    skillId: string,
    moduleId: string
  ): Promise<LessonProgress>;
  
  /**
   * Update a lesson progress.
   * @param lessonProgressId The ID of the lesson progress to update
   * @param data The data to update
   */
  updateLessonProgress(
    lessonProgressId: string,
    data: Partial<Omit<LessonProgress, 'id' | 'createdAt' | 'updatedAt'>>
  ): Promise<LessonProgress>;
  
  /**
   * Record a user's attempt at an exercise.
   * @param attempt The exercise attempt data
   */
  recordExerciseAttempt(
    attempt: Omit<ExerciseAttempt, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<ExerciseAttempt>;
  
  /**
   * Update a skill's mastery level based on completed lessons.
   * @param userId The ID of the user
   * @param skillId The ID of the skill
   */
  updateSkillMastery(userId: string, skillId: string): Promise<SkillProgress>;
  
  /**
   * Unlock a skill for a user.
   * @param userId The ID of the user
   * @param skillId The ID of the skill to unlock
   */
  unlockSkill(userId: string, skillId: string): Promise<SkillProgress>;
}

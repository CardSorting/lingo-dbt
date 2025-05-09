/**
 * DTOs (Data Transfer Objects) for the learning domain.
 * These objects are used to transfer data between the application and presentation layers.
 */

/**
 * DTO for user progress data.
 */
export interface UserProgressDTO {
  /**
   * The ID of the user.
   */
  userId: string;
  
  /**
   * The total experience points earned by the user.
   */
  totalXp: number;
  
  /**
   * The user's current level based on XP.
   */
  level: number;
  
  /**
   * The user's current streak (consecutive days of activity).
   */
  currentStreak: number;
  
  /**
   * The user's longest streak achieved.
   */
  longestStreak: number;
  
  /**
   * ISO string date when the user last completed a lesson.
   */
  lastCompletedAt?: string;
  
  /**
   * Progress data for modules.
   */
  moduleProgress: ModuleProgressDTO[];
}

/**
 * DTO for module progress data.
 */
export interface ModuleProgressDTO {
  /**
   * The ID of the module.
   */
  moduleId: string;
  
  /**
   * The name of the module.
   */
  moduleName: string;
  
  /**
   * The number of completed lessons in the module.
   */
  completedLessons: number;
  
  /**
   * The total number of lessons in the module.
   */
  totalLessons: number;
  
  /**
   * The completion percentage (0-100).
   */
  percentComplete: number;
  
  /**
   * ISO string date when the user last completed a lesson in this module.
   */
  lastCompletedAt?: string;
  
  /**
   * Progress data for skills within this module.
   */
  skillProgress: SkillProgressDTO[];
}

/**
 * DTO for skill progress data.
 */
export interface SkillProgressDTO {
  /**
   * The ID of the skill.
   */
  skillId: string;
  
  /**
   * The name of the skill.
   */
  skillName: string;
  
  /**
   * The mastery level of the skill (0-5).
   */
  masteryLevel: number;
  
  /**
   * Whether the skill is unlocked for the user.
   */
  isUnlocked: boolean;
  
  /**
   * ISO string date when the skill was unlocked.
   */
  unlockedAt?: string;
  
  /**
   * Progress data for lessons within this skill.
   */
  lessonProgress: LessonProgressDTO[];
}

/**
 * DTO for lesson progress data.
 */
export interface LessonProgressDTO {
  /**
   * The ID of the lesson.
   */
  lessonId: string;
  
  /**
   * The name of the lesson.
   */
  lessonName: string;
  
  /**
   * Whether the lesson is completed.
   */
  isCompleted: boolean;
  
  /**
   * The number of attempts made on this lesson.
   */
  attemptCount: number;
  
  /**
   * ISO string date when the lesson was completed.
   */
  completedAt?: string;
}

/**
 * DTO for exercise data.
 */
export interface ExerciseDTO {
  /**
   * The ID of the exercise.
   */
  id: string;
  
  /**
   * The type of exercise (multiple_choice, text_input, etc.).
   */
  type: string;
  
  /**
   * The question or prompt for the exercise.
   */
  question: string;
  
  /**
   * The options for multiple choice exercises, empty for other types.
   */
  options: string[];
  
  /**
   * The difficulty level of the exercise (1-5).
   */
  difficultyLevel: number;
}

/**
 * DTO for exercise attempt data.
 */
export interface ExerciseAttemptDTO {
  /**
   * The ID of the exercise.
   */
  exerciseId: string;
  
  /**
   * Whether the attempt was correct.
   */
  isCorrect: boolean;
  
  /**
   * The user's answer.
   */
  userAnswer: string;
  
  /**
   * ISO string date when the attempt was made.
   */
  attemptedAt: string;
}

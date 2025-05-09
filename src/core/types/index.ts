// Common types used across the application

// Base entity with common properties
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User-related types
export interface User extends BaseEntity {
  email: string;
  name?: string;
  image?: string;
  emailVerified?: Date;
  lastActive: Date;
}

// Learning domain types
export interface Module extends BaseEntity {
  name: string;
  description: string;
  orderIndex: number;
  imageUrl?: string;
  isActive: boolean;
}

export interface Skill extends BaseEntity {
  moduleId: string;
  name: string;
  description: string;
  orderIndex: number;
  imageUrl?: string;
  isAdvanced: boolean;
  isActive: boolean;
}

export interface Lesson extends BaseEntity {
  skillId: string;
  name: string;
  description: string;
  orderIndex: number;
  xpReward: number;
  isActive: boolean;
}

export type ExerciseType = 'multiple_choice' | 'text_input' | 'pairing' | 'fill_blank' | 'reflection';

export interface Exercise extends BaseEntity {
  lessonId: string;
  type: ExerciseType;
  question: string;
  correctAnswer: string;
  options: string[];
  explanation?: string;
  difficultyLevel: number;
  isActive: boolean;
}

// Progress domain types
export interface UserProgress extends BaseEntity {
  userId: string;
  totalXp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastCompletedAt?: Date;
}

export interface ModuleProgress extends BaseEntity {
  userProgressId: string;
  moduleId: string;
  completedLessons: number;
  totalLessons: number;
  lastCompletedAt?: Date;
}

export interface SkillProgress extends BaseEntity {
  moduleProgressId: string;
  skillId: string;
  masteryLevel: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

export interface LessonProgress extends BaseEntity {
  skillProgressId: string;
  lessonId: string;
  isCompleted: boolean;
  attemptCount: number;
  completedAt?: Date;
}

export interface ExerciseAttempt extends BaseEntity {
  lessonProgressId: string;
  exerciseId: string;
  isCorrect: boolean;
  userAnswer: string;
  attemptedAt: Date;
}

// Gamification domain types
export interface Achievement extends BaseEntity {
  name: string;
  description: string;
  imageUrl?: string;
  criteria: string;
  xpReward: number;
}

export interface UserAchievement extends BaseEntity {
  userId: string;
  achievementId: string;
  earnedAt: Date;
}

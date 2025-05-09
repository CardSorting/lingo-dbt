import { 
  UserProgress, 
  ModuleProgress, 
  SkillProgress, 
  LessonProgress, 
  ExerciseAttempt 
} from '../types';

// UserProgress read operations
export interface IUserProgressReadRepository {
  findById(id: string): Promise<UserProgress | null>;
  findByUserId(userId: string): Promise<UserProgress | null>;
  findWithModuleProgresses(userId: string): Promise<UserProgress & { moduleProgresses: ModuleProgress[] } | null>;
}

// UserProgress write operations
export interface IUserProgressWriteRepository {
  create(progress: Omit<UserProgress, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserProgress>;
  update(id: string, progress: Partial<UserProgress>): Promise<UserProgress>;
  addXp(userId: string, xpAmount: number): Promise<UserProgress>;
  updateStreak(userId: string): Promise<UserProgress>;
  resetStreak(userId: string): Promise<UserProgress>;
}

// ModuleProgress read operations
export interface IModuleProgressReadRepository {
  findById(id: string): Promise<ModuleProgress | null>;
  findByUserAndModule(userProgressId: string, moduleId: string): Promise<ModuleProgress | null>;
  findWithSkillProgresses(id: string): Promise<ModuleProgress & { skillProgresses: SkillProgress[] } | null>;
}

// ModuleProgress write operations
export interface IModuleProgressWriteRepository {
  create(progress: Omit<ModuleProgress, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModuleProgress>;
  update(id: string, progress: Partial<ModuleProgress>): Promise<ModuleProgress>;
  incrementCompletedLessons(id: string): Promise<ModuleProgress>;
}

// SkillProgress read operations
export interface ISkillProgressReadRepository {
  findById(id: string): Promise<SkillProgress | null>;
  findByModuleProgressAndSkill(moduleProgressId: string, skillId: string): Promise<SkillProgress | null>;
  findWithLessonProgresses(id: string): Promise<SkillProgress & { lessonProgresses: LessonProgress[] } | null>;
}

// SkillProgress write operations
export interface ISkillProgressWriteRepository {
  create(progress: Omit<SkillProgress, 'id' | 'createdAt' | 'updatedAt'>): Promise<SkillProgress>;
  update(id: string, progress: Partial<SkillProgress>): Promise<SkillProgress>;
  increaseMasteryLevel(id: string): Promise<SkillProgress>;
  unlock(id: string): Promise<SkillProgress>;
}

// LessonProgress read operations
export interface ILessonProgressReadRepository {
  findById(id: string): Promise<LessonProgress | null>;
  findBySkillProgressAndLesson(skillProgressId: string, lessonId: string): Promise<LessonProgress | null>;
  findWithExerciseAttempts(id: string): Promise<LessonProgress & { exerciseAttempts: ExerciseAttempt[] } | null>;
}

// LessonProgress write operations
export interface ILessonProgressWriteRepository {
  create(progress: Omit<LessonProgress, 'id' | 'createdAt' | 'updatedAt'>): Promise<LessonProgress>;
  update(id: string, progress: Partial<LessonProgress>): Promise<LessonProgress>;
  incrementAttemptCount(id: string): Promise<LessonProgress>;
  markAsCompleted(id: string): Promise<LessonProgress>;
}

// ExerciseAttempt read operations
export interface IExerciseAttemptReadRepository {
  findById(id: string): Promise<ExerciseAttempt | null>;
  findByLessonProgressAndExercise(lessonProgressId: string, exerciseId: string): Promise<ExerciseAttempt[]>;
  findLastAttempt(lessonProgressId: string, exerciseId: string): Promise<ExerciseAttempt | null>;
}

// ExerciseAttempt write operations
export interface IExerciseAttemptWriteRepository {
  create(attempt: Omit<ExerciseAttempt, 'id' | 'createdAt' | 'updatedAt'>): Promise<ExerciseAttempt>;
}

import { Module, Skill, Lesson, Exercise } from '../types';

// Module read operations
export interface IModuleReadRepository {
  findById(id: string): Promise<Module | null>;
  findAll(includeInactive?: boolean): Promise<Module[]>;
  findWithSkills(id: string): Promise<Module & { skills: Skill[] } | null>;
}

// Module write operations
export interface IModuleWriteRepository {
  create(module: Omit<Module, 'id' | 'createdAt' | 'updatedAt'>): Promise<Module>;
  update(id: string, module: Partial<Module>): Promise<Module>;
  delete(id: string): Promise<void>;
}

// Skill read operations
export interface ISkillReadRepository {
  findById(id: string): Promise<Skill | null>;
  findByModule(moduleId: string, includeInactive?: boolean): Promise<Skill[]>;
  findWithLessons(id: string): Promise<Skill & { lessons: Lesson[] } | null>;
}

// Skill write operations
export interface ISkillWriteRepository {
  create(skill: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>): Promise<Skill>;
  update(id: string, skill: Partial<Skill>): Promise<Skill>;
  delete(id: string): Promise<void>;
}

// Lesson read operations
export interface ILessonReadRepository {
  findById(id: string): Promise<Lesson | null>;
  findBySkill(skillId: string, includeInactive?: boolean): Promise<Lesson[]>;
  findWithExercises(id: string): Promise<Lesson & { exercises: Exercise[] } | null>;
}

// Lesson write operations
export interface ILessonWriteRepository {
  create(lesson: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lesson>;
  update(id: string, lesson: Partial<Lesson>): Promise<Lesson>;
  delete(id: string): Promise<void>;
}

// Exercise read operations
export interface IExerciseReadRepository {
  findById(id: string): Promise<Exercise | null>;
  findByLesson(lessonId: string, includeInactive?: boolean): Promise<Exercise[]>;
}

// Exercise write operations
export interface IExerciseWriteRepository {
  create(exercise: Omit<Exercise, 'id' | 'createdAt' | 'updatedAt'>): Promise<Exercise>;
  update(id: string, exercise: Partial<Exercise>): Promise<Exercise>;
  delete(id: string): Promise<void>;
}

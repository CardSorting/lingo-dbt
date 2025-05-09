import { z } from 'zod';
import { ExerciseType } from '../../core/types';

// Module DTOs
export const ModuleDTO = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  orderIndex: z.number(),
  imageUrl: z.string().nullable().optional(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModuleDTO = z.infer<typeof ModuleDTO>;

export const CreateModuleDTO = z.object({
  name: z.string(),
  description: z.string(),
  orderIndex: z.number(),
  imageUrl: z.string().optional(),
  isActive: z.boolean().optional(),
});

export type CreateModuleDTO = z.infer<typeof CreateModuleDTO>;

export const UpdateModuleDTO = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  orderIndex: z.number().optional(),
  imageUrl: z.string().optional(),
  isActive: z.boolean().optional(),
});

export type UpdateModuleDTO = z.infer<typeof UpdateModuleDTO>;

// Skill DTOs
export const SkillDTO = z.object({
  id: z.string().uuid(),
  moduleId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  orderIndex: z.number(),
  imageUrl: z.string().nullable().optional(),
  isAdvanced: z.boolean(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SkillDTO = z.infer<typeof SkillDTO>;

export const CreateSkillDTO = z.object({
  moduleId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  orderIndex: z.number(),
  imageUrl: z.string().optional(),
  isAdvanced: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

export type CreateSkillDTO = z.infer<typeof CreateSkillDTO>;

export const UpdateSkillDTO = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  orderIndex: z.number().optional(),
  imageUrl: z.string().optional(),
  isAdvanced: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

export type UpdateSkillDTO = z.infer<typeof UpdateSkillDTO>;

// Lesson DTOs
export const LessonDTO = z.object({
  id: z.string().uuid(),
  skillId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  orderIndex: z.number(),
  xpReward: z.number(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LessonDTO = z.infer<typeof LessonDTO>;

export const CreateLessonDTO = z.object({
  skillId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  orderIndex: z.number(),
  xpReward: z.number().optional(),
  isActive: z.boolean().optional(),
});

export type CreateLessonDTO = z.infer<typeof CreateLessonDTO>;

export const UpdateLessonDTO = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  orderIndex: z.number().optional(),
  xpReward: z.number().optional(),
  isActive: z.boolean().optional(),
});

export type UpdateLessonDTO = z.infer<typeof UpdateLessonDTO>;

// Exercise DTOs
export const ExerciseDTO = z.object({
  id: z.string().uuid(),
  lessonId: z.string().uuid(),
  type: z.enum(['multiple_choice', 'text_input', 'pairing', 'fill_blank', 'reflection']),
  question: z.string(),
  correctAnswer: z.string(),
  options: z.array(z.string()),
  explanation: z.string().nullable().optional(),
  difficultyLevel: z.number(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ExerciseDTO = z.infer<typeof ExerciseDTO>;

export const CreateExerciseDTO = z.object({
  lessonId: z.string().uuid(),
  type: z.enum(['multiple_choice', 'text_input', 'pairing', 'fill_blank', 'reflection']),
  question: z.string(),
  correctAnswer: z.string(),
  options: z.array(z.string()),
  explanation: z.string().optional(),
  difficultyLevel: z.number().optional(),
  isActive: z.boolean().optional(),
});

export type CreateExerciseDTO = z.infer<typeof CreateExerciseDTO>;

export const UpdateExerciseDTO = z.object({
  type: z.enum(['multiple_choice', 'text_input', 'pairing', 'fill_blank', 'reflection']).optional(),
  question: z.string().optional(),
  correctAnswer: z.string().optional(),
  options: z.array(z.string()).optional(),
  explanation: z.string().optional(),
  difficultyLevel: z.number().optional(),
  isActive: z.boolean().optional(),
});

export type UpdateExerciseDTO = z.infer<typeof UpdateExerciseDTO>;

// Learning path DTO (for client-side rendering)
export const LearningPathDTO = z.object({
  modules: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string(),
      description: z.string(),
      imageUrl: z.string().nullable().optional(),
      orderIndex: z.number(),
      skills: z.array(
        z.object({
          id: z.string().uuid(),
          name: z.string(),
          description: z.string(),
          imageUrl: z.string().nullable().optional(),
          orderIndex: z.number(),
          isAdvanced: z.boolean(),
          isUnlocked: z.boolean(),
          masteryLevel: z.number().optional(),
        })
      ).optional(),
    })
  ),
});

export type LearningPathDTO = z.infer<typeof LearningPathDTO>;

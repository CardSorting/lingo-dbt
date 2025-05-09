import { z } from 'zod';
// Base User DTO
export const UserDTO = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    name: z.string().nullable().optional(),
    image: z.string().nullable().optional(),
    lastActive: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
});
// User creation DTO
export const CreateUserDTO = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(8).optional(), // Optional if using OAuth
});
// User update DTO
export const UpdateUserDTO = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().optional(),
});
// User profile DTO
export const UserProfileDTO = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    name: z.string().nullable().optional(),
    image: z.string().nullable().optional(),
    level: z.number(),
    totalXp: z.number(),
    currentStreak: z.number(),
    longestStreak: z.number(),
    achievements: z.array(z.object({
        id: z.string().uuid(),
        name: z.string(),
        description: z.string(),
        imageUrl: z.string().nullable().optional(),
        earnedAt: z.date(),
    })).optional(),
});
// User authentication result DTO
export const AuthResultDTO = z.object({
    user: UserDTO,
    token: z.string().optional(), // JWT token if using token-based auth
});

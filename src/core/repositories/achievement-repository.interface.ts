import { Achievement, UserAchievement } from '../types';

// Achievement read operations
export interface IAchievementReadRepository {
  findById(id: string): Promise<Achievement | null>;
  findAll(): Promise<Achievement[]>;
  findByIds(ids: string[]): Promise<Achievement[]>;
}

// Achievement write operations
export interface IAchievementWriteRepository {
  create(achievement: Omit<Achievement, 'id' | 'createdAt' | 'updatedAt'>): Promise<Achievement>;
  update(id: string, achievement: Partial<Achievement>): Promise<Achievement>;
  delete(id: string): Promise<void>;
}

// UserAchievement read operations
export interface IUserAchievementReadRepository {
  findById(id: string): Promise<UserAchievement | null>;
  findByUserAndAchievement(userId: string, achievementId: string): Promise<UserAchievement | null>;
  findByUser(userId: string): Promise<(UserAchievement & { achievement: Achievement })[]>;
  findRecentByUser(userId: string, limit: number): Promise<(UserAchievement & { achievement: Achievement })[]>;
}

// UserAchievement write operations
export interface IUserAchievementWriteRepository {
  create(userAchievement: Omit<UserAchievement, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserAchievement>;
  delete(id: string): Promise<void>;
}

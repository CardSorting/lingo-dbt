import { User } from '../types';

// Read operations
export interface IUserReadRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}

// Write operations
export interface IUserWriteRepository {
  create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
  update(id: string, user: Partial<User>): Promise<User>;
  updateLastActive(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}

import { BaseEntity, User as UserType } from '../types';

/**
 * User domain entity.
 * This is a rich domain entity that encapsulates business logic related to users.
 */
export class UserEntity implements BaseEntity {
  id: string;
  email: string;
  name?: string;
  image?: string;
  emailVerified?: Date;
  lastActive: Date;
  createdAt: Date;
  updatedAt: Date;
  
  // Private fields not exposed in the type
  private _password?: string;
  
  /**
   * Create a new User entity instance.
   */
  constructor(data: UserType) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.image = data.image;
    this.emailVerified = data.emailVerified;
    this.lastActive = data.lastActive;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  /**
   * Update the user's last active timestamp.
   * This is used to track user activity and calculate streaks.
   */
  updateLastActive(): void {
    this.lastActive = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Verify the user's email address.
   */
  verifyEmail(): void {
    if (this.emailVerified) {
      throw new Error('Email already verified');
    }
    
    this.emailVerified = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Update the user's profile information.
   */
  updateProfile(name?: string, image?: string): void {
    if (name !== undefined) {
      this.name = name;
    }
    
    if (image !== undefined) {
      this.image = image;
    }
    
    this.updatedAt = new Date();
  }

  /**
   * Convert the entity to a plain object.
   * This removes sensitive information like passwords.
   */
  toJSON(): Omit<UserType, 'password'> {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      image: this.image,
      emailVerified: this.emailVerified,
      lastActive: this.lastActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  /**
   * Check if the user is a new user (created within the last 24 hours).
   */
  isNewUser(): boolean {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    return this.createdAt > oneDayAgo;
  }

  /**
   * Check if the user is active (has been active in the last 7 days).
   */
  isActive(): boolean {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return this.lastActive > sevenDaysAgo;
  }

  /**
   * Check if this is a valid streak day (user was either active yesterday or today so far).
   */
  isValidStreakDay(): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const lastActiveDate = new Date(this.lastActive);
    lastActiveDate.setHours(0, 0, 0, 0);
    
    return lastActiveDate.getTime() === today.getTime() || 
           lastActiveDate.getTime() === yesterday.getTime();
  }
}

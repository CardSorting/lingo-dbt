/**
 * User domain entity.
 * This is a rich domain entity that encapsulates business logic related to users.
 */
export class UserEntity {
    /**
     * Create a new User entity instance.
     */
    constructor(data) {
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
    updateLastActive() {
        this.lastActive = new Date();
        this.updatedAt = new Date();
    }
    /**
     * Verify the user's email address.
     */
    verifyEmail() {
        if (this.emailVerified) {
            throw new Error('Email already verified');
        }
        this.emailVerified = new Date();
        this.updatedAt = new Date();
    }
    /**
     * Update the user's profile information.
     */
    updateProfile(name, image) {
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
    toJSON() {
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
    isNewUser() {
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
        return this.createdAt > oneDayAgo;
    }
    /**
     * Check if the user is active (has been active in the last 7 days).
     */
    isActive() {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return this.lastActive > sevenDaysAgo;
    }
    /**
     * Check if this is a valid streak day (user was either active yesterday or today so far).
     */
    isValidStreakDay() {
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

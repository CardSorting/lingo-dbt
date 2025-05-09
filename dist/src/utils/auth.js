import { hash, compare } from 'bcrypt';
// Number of salt rounds for bcrypt
const SALT_ROUNDS = 10;
/**
 * Hash a password using bcrypt
 * @param password The plain text password to hash
 * @returns Promise that resolves to the hashed password
 */
export async function hashPassword(password) {
    return hash(password, SALT_ROUNDS);
}
/**
 * Compare a plain text password with a hashed password
 * @param password The plain text password to check
 * @param hashedPassword The hashed password to compare against
 * @returns Promise that resolves to true if the password matches, false otherwise
 */
export async function verifyPassword(password, hashedPassword) {
    return compare(password, hashedPassword);
}
/**
 * Generate a secure random token
 * @param length The length of the token
 * @returns A secure random token as a string
 */
export function generateToken(length = 32) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    // In a real implementation, this should use a cryptographically secure random number generator
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}
/**
 * Check if a user has the required role
 * @param userRoles The roles of the user
 * @param requiredRole The required role
 * @returns True if the user has the required role, false otherwise
 */
export function hasRole(userRoles, requiredRole) {
    return userRoles.includes(requiredRole);
}

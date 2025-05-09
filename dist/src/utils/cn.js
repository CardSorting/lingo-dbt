import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * A utility function that merges tailwind classes conditionally
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

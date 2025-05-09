/**
 * Query to get a user's progress.
 */
export class GetUserProgressQuery {
    constructor(userId) {
        this.userId = userId;
    }
}
/**
 * Handler for the GetUserProgressQuery.
 * Returns a DTO representing the user's progress.
 */
export class GetUserProgressQueryHandler {
    constructor(progressReadRepository) {
        this.progressReadRepository = progressReadRepository;
    }
    /**
     * Execute the query to get a user's progress.
     * @param query The query containing the user ID
     * @returns DTO with user progress data
     */
    async execute(query) {
        var _a;
        const { userId } = query;
        // Get user progress from repository
        const userProgress = await this.progressReadRepository.getUserProgress(userId);
        if (!userProgress) {
            throw new Error(`User progress not found for user: ${userId}`);
        }
        // Create a DTO for the response
        return {
            userId: userProgress.userId,
            totalXp: userProgress.totalXp,
            level: userProgress.level,
            currentStreak: userProgress.currentStreak,
            longestStreak: userProgress.longestStreak,
            lastCompletedAt: (_a = userProgress.lastCompletedAt) === null || _a === void 0 ? void 0 : _a.toISOString(),
            moduleProgress: [] // We could load module progress here if needed
        };
    }
}

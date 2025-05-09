import { IQuery, IQueryHandler } from './query.interface';
import { UserProgressDTO } from '../dtos/learning.dto';
import { IProgressReadRepository } from '../../core/repositories/progress-repository.interface';

/**
 * Query to get a user's progress.
 */
export class GetUserProgressQuery implements IQuery<UserProgressDTO> {
  constructor(public readonly userId: string) {}
}

/**
 * Handler for the GetUserProgressQuery.
 * Returns a DTO representing the user's progress.
 */
export class GetUserProgressQueryHandler implements IQueryHandler<GetUserProgressQuery, UserProgressDTO> {
  constructor(private progressReadRepository: IProgressReadRepository) {}

  /**
   * Execute the query to get a user's progress.
   * @param query The query containing the user ID
   * @returns DTO with user progress data
   */
  async execute(query: GetUserProgressQuery): Promise<UserProgressDTO> {
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
      lastCompletedAt: userProgress.lastCompletedAt?.toISOString(),
      moduleProgress: [] // We could load module progress here if needed
    };
  }
}

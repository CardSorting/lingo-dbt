/**
 * Handler for the UserRegisteredEvent.
 * Sets up initial progress records for a newly registered user.
 */
export class UserRegisteredEventHandler {
    constructor(progressWriteRepository) {
        this.progressWriteRepository = progressWriteRepository;
    }
    /**
     * Handle the event.
     * @param event The user registered event
     */
    async handle(event) {
        const { userId } = event;
        try {
            // Create initial progress record for the user
            await this.progressWriteRepository.createUserProgress(userId);
            console.log(`Created initial progress for user ${userId}`);
        }
        catch (error) {
            console.error(`Error creating initial progress for user ${userId}:`, error);
            // In a production system, we might want to retry, log to a monitoring system, etc.
        }
    }
}

import { hashPassword } from '../../utils/auth';
import { UserRegisteredEvent } from '../../core/events/user-registered.event';
/**
 * Handler for the RegisterUserCommand.
 * Implements the ICommandHandler interface from the CQRS pattern.
 */
export class RegisterUserCommandHandler {
    constructor(userWriteRepository, eventBus) {
        this.userWriteRepository = userWriteRepository;
        this.eventBus = eventBus;
    }
    async execute(command) {
        const { email, name, password } = command;
        // Basic validation (more comprehensive validation should be done with zod at API layer)
        if (!email) {
            throw new Error('Email is required');
        }
        // Create user data object
        const userData = {
            email,
            name,
            lastActive: new Date(),
        };
        // Hash password if provided
        if (password) {
            userData.password = await hashPassword(password);
        }
        // Create user
        const user = await this.userWriteRepository.create(userData);
        // Publish domain event
        await this.eventBus.publish(new UserRegisteredEvent(user.id, user.email, !!password // Indicates if this is a password-based registration or OAuth
        ));
        return user.id;
    }
}

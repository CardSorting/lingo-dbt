import { ICommand, ICommandHandler } from './command.interface';
import { IUserWriteRepository } from '../../core/repositories/user-repository.interface';
import { hashPassword } from '../../utils/auth';
import { IEventBus } from '../../core/events/event-bus.interface';
import { UserRegisteredEvent } from '../../core/events/user-registered.event';

/**
 * Command to register a new user in the system.
 * Implements the ICommand interface from the CQRS pattern.
 */
export interface RegisterUserCommand extends ICommand {
  email: string;
  name?: string;
  password?: string; // Optional if using OAuth
}

/**
 * Handler for the RegisterUserCommand.
 * Implements the ICommandHandler interface from the CQRS pattern.
 */
export class RegisterUserCommandHandler implements ICommandHandler<RegisterUserCommand, string> {
  constructor(
    private userWriteRepository: IUserWriteRepository,
    private eventBus: IEventBus
  ) {}

  async execute(command: RegisterUserCommand): Promise<string> {
    const { email, name, password } = command;

    // Basic validation (more comprehensive validation should be done with zod at API layer)
    if (!email) {
      throw new Error('Email is required');
    }

    // Create user data object
    const userData: any = {
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
    await this.eventBus.publish(
      new UserRegisteredEvent(
        user.id,
        user.email,
        !!password // Indicates if this is a password-based registration or OAuth
      )
    );

    return user.id;
  }
}

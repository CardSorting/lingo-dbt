import { CreateUserDTO } from '../dtos/user.dto';
import { IUserWriteRepository } from '../../core/repositories/user-repository.interface';
import { hashPassword } from '../../utils/auth';

export interface RegisterUserCommand {
  email: string;
  name?: string;
  password?: string; // Optional if using OAuth
}

export class RegisterUserCommandHandler {
  constructor(private userWriteRepository: IUserWriteRepository) {}

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

    return user.id;
  }
}

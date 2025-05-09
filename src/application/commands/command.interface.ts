/**
 * Marker interface for command objects.
 * Commands represent intentions to change the system state.
 * This is part of the CQRS pattern.
 */
export interface ICommand {
  // This is a marker interface that may be extended with common command properties
}

/**
 * Interface for handlers that process specific command types.
 * Command handlers contain business logic that modifies the system state.
 */
export interface ICommandHandler<TCommand extends ICommand, TResult = void> {
  /**
   * Executes the command and returns a result if applicable.
   * @param command The command to execute
   */
  execute(command: TCommand): Promise<TResult>;
}

/**
 * Service for dispatching commands to their appropriate handlers.
 */
export interface ICommandBus {
  /**
   * Executes a command by dispatching it to the appropriate command handler.
   * @param command The command to execute
   */
  execute<TResult = void>(command: ICommand): Promise<TResult>;
}

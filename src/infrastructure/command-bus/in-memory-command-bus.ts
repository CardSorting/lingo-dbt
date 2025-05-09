import { ICommand, ICommandBus, ICommandHandler } from '../../application/commands/command.interface';

/**
 * In-memory implementation of the command bus.
 * This implementation stores command handlers in memory and dispatches commands synchronously.
 */
export class InMemoryCommandBus implements ICommandBus {
  private handlers = new Map<string, ICommandHandler<ICommand, any>>();

  /**
   * Registers a command handler for a specific command type.
   * @param commandType The command class/constructor
   * @param handler The handler that will process commands of this type
   */
  registerHandler<TCommand extends ICommand, TResult = void>(
    commandType: new (...args: any[]) => TCommand,
    handler: ICommandHandler<TCommand, TResult>
  ): void {
    const commandName = commandType.name;
    if (this.handlers.has(commandName)) {
      throw new Error(`Command handler for '${commandName}' already registered`);
    }

    // We know this cast is safe because we're ensuring the handler accepts the same type as the command
    this.handlers.set(commandName, handler as ICommandHandler<ICommand, any>);
  }

  /**
   * Executes a command by dispatching it to the appropriate handler.
   * @param command The command to execute
   */
  async execute<TResult = void>(command: ICommand): Promise<TResult> {
    const commandName = command.constructor.name;
    const handler = this.handlers.get(commandName);

    if (!handler) {
      throw new Error(`No handler registered for command '${commandName}'`);
    }

    return handler.execute(command) as Promise<TResult>;
  }
}

/**
 * In-memory implementation of the command bus.
 * This implementation stores command handlers in memory and dispatches commands synchronously.
 */
export class InMemoryCommandBus {
    constructor() {
        this.handlers = new Map();
    }
    /**
     * Registers a command handler for a specific command type.
     * @param commandType The command class/constructor
     * @param handler The handler that will process commands of this type
     */
    registerHandler(commandType, handler) {
        const commandName = commandType.name;
        if (this.handlers.has(commandName)) {
            throw new Error(`Command handler for '${commandName}' already registered`);
        }
        // We know this cast is safe because we're ensuring the handler accepts the same type as the command
        this.handlers.set(commandName, handler);
    }
    /**
     * Executes a command by dispatching it to the appropriate handler.
     * @param command The command to execute
     */
    async execute(command) {
        const commandName = command.constructor.name;
        const handler = this.handlers.get(commandName);
        if (!handler) {
            throw new Error(`No handler registered for command '${commandName}'`);
        }
        return handler.execute(command);
    }
}

/**
 * Dependency Injection container for the application.
 * This file sets up all dependencies and wires them together.
 */
import { InMemoryEventBus } from './events/in-memory-event-bus';
import { InMemoryCommandBus } from './command-bus/in-memory-command-bus';
import { InMemoryQueryBus } from './query-bus/in-memory-query-bus';
import { UserWriteRepository } from './repositories/user/user-write.repository';
import { UserReadRepository } from './repositories/user/user-read.repository';
/**
 * Simple dependency injection container for the application.
 * This manages core dependencies and provides them to the application.
 */
export class DIContainer {
    /**
     * Private constructor to enforce singleton pattern
     */
    constructor() {
        // Initialize core infrastructure
        this._eventBus = new InMemoryEventBus();
        this._commandBus = new InMemoryCommandBus();
        this._queryBus = new InMemoryQueryBus();
        // Initialize repositories
        this._userWriteRepository = new UserWriteRepository();
        this._userReadRepository = new UserReadRepository();
    }
    /**
     * Get the singleton instance of the container
     */
    static getInstance() {
        if (!DIContainer.instance) {
            DIContainer.instance = new DIContainer();
        }
        return DIContainer.instance;
    }
    // Get infrastructure services
    /**
     * Get the event bus instance
     */
    get eventBus() {
        return this._eventBus;
    }
    /**
     * Get the command bus instance
     */
    get commandBus() {
        return this._commandBus;
    }
    /**
     * Get the query bus instance
     */
    get queryBus() {
        return this._queryBus;
    }
    // Get repositories
    /**
     * Get the user write repository instance
     */
    get userWriteRepository() {
        return this._userWriteRepository;
    }
    /**
     * Get the user read repository instance
     */
    get userReadRepository() {
        return this._userReadRepository;
    }
    /**
     * Register a command handler with the command bus
     * @param commandType The command type to register
     * @param handler The handler for the command
     */
    registerCommandHandler(commandType, handler) {
        this._commandBus.registerHandler(commandType, handler);
    }
    /**
     * Register a query handler with the query bus
     * @param queryType The query type to register
     * @param handler The handler for the query
     */
    registerQueryHandler(queryType, handler) {
        this._queryBus.registerHandler(queryType, handler);
    }
    /**
     * Register an event handler with the event bus
     * @param eventType The event type to subscribe to
     * @param handler The handler for the event
     */
    registerEventHandler(eventType, handler) {
        this._eventBus.subscribe(eventType, handler);
    }
}
/**
 * Export the container instance for convenience
 */
export const container = DIContainer.getInstance();

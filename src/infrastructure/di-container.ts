/**
 * Dependency Injection container for the application.
 * This file sets up all dependencies and wires them together.
 */

import { IEventBus } from '../core/events/event-bus.interface';
import { InMemoryEventBus } from './events/in-memory-event-bus';
import { ICommandBus } from '../application/commands/command.interface';
import { InMemoryCommandBus } from './command-bus/in-memory-command-bus';
import { IQueryBus } from '../application/queries/query.interface';
import { InMemoryQueryBus } from './query-bus/in-memory-query-bus';

import { UserWriteRepository } from './repositories/user/user-write.repository';
import { UserReadRepository } from './repositories/user/user-read.repository';

/**
 * Simple dependency injection container for the application.
 * This manages core dependencies and provides them to the application.
 */
export class DIContainer {
  // Singleton instance
  private static instance: DIContainer;
  
  // Core infrastructure services
  private readonly _eventBus: IEventBus;
  private readonly _commandBus: ICommandBus;
  private readonly _queryBus: IQueryBus;
  
  // Repository instances
  private readonly _userWriteRepository: UserWriteRepository;
  private readonly _userReadRepository: UserReadRepository;
  
  /**
   * Private constructor to enforce singleton pattern
   */
  private constructor() {
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
  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }
  
  // Get infrastructure services
  
  /**
   * Get the event bus instance
   */
  get eventBus(): IEventBus {
    return this._eventBus;
  }
  
  /**
   * Get the command bus instance
   */
  get commandBus(): ICommandBus {
    return this._commandBus;
  }
  
  /**
   * Get the query bus instance
   */
  get queryBus(): IQueryBus {
    return this._queryBus;
  }
  
  // Get repositories
  
  /**
   * Get the user write repository instance
   */
  get userWriteRepository(): UserWriteRepository {
    return this._userWriteRepository;
  }
  
  /**
   * Get the user read repository instance
   */
  get userReadRepository(): UserReadRepository {
    return this._userReadRepository;
  }
  
  /**
   * Register a command handler with the command bus
   * @param commandType The command type to register
   * @param handler The handler for the command
   */
  registerCommandHandler<TCommand, TResult>(
    commandType: new (...args: any[]) => TCommand,
    handler: any
  ): void {
    (this._commandBus as InMemoryCommandBus).registerHandler(
      commandType as any,
      handler
    );
  }
  
  /**
   * Register a query handler with the query bus
   * @param queryType The query type to register
   * @param handler The handler for the query
   */
  registerQueryHandler<TQuery, TResult>(
    queryType: new (...args: any[]) => TQuery,
    handler: any
  ): void {
    (this._queryBus as InMemoryQueryBus).registerHandler(
      queryType as any,
      handler
    );
  }
  
  /**
   * Register an event handler with the event bus
   * @param eventType The event type to subscribe to
   * @param handler The handler for the event
   */
  registerEventHandler<TEvent>(
    eventType: new (...args: any[]) => TEvent,
    handler: any
  ): void {
    this._eventBus.subscribe(
      eventType as any,
      handler
    );
  }
}

/**
 * Export the container instance for convenience
 */
export const container = DIContainer.getInstance();

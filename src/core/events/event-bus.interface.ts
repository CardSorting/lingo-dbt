import { IDomainEvent } from './domain-event.interface';

/**
 * Interface for an event handler that processes a specific type of domain event.
 */
export interface IEventHandler<T extends IDomainEvent> {
  handle(event: T): Promise<void>;
}

/**
 * Interface for the event bus that manages publishing and subscribing to domain events.
 */
export interface IEventBus {
  /**
   * Publishes an event to all subscribed handlers.
   * @param event The domain event to publish
   */
  publish<T extends IDomainEvent>(event: T): Promise<void>;
  
  /**
   * Subscribes an event handler to a specific event type.
   * @param eventType The class/type of the event
   * @param handler The handler that will process events of this type
   */
  subscribe<T extends IDomainEvent>(
    eventType: new (...args: any[]) => T,
    handler: IEventHandler<T>
  ): void;
  
  /**
   * Unsubscribes an event handler from a specific event type.
   * @param eventType The class/type of the event
   * @param handler The handler to unsubscribe
   */
  unsubscribe<T extends IDomainEvent>(
    eventType: new (...args: any[]) => T,
    handler: IEventHandler<T>
  ): void;
}

import { IDomainEvent } from '../../core/events/domain-event.interface';
import { IEventBus, IEventHandler } from '../../core/events/event-bus.interface';

/**
 * In-memory implementation of the event bus.
 * This implementation stores event handlers in memory and dispatches events synchronously.
 * In a production environment, this might be replaced with a more robust solution.
 */
export class InMemoryEventBus implements IEventBus {
  // Map of event types to their handlers
  private handlers: Map<string, IEventHandler<IDomainEvent>[]> = new Map();

  /**
   * Get the name of an event type as a string.
   */
  private getEventName<T extends IDomainEvent>(eventType: new (...args: any[]) => T): string {
    return eventType.name;
  }

  /**
   * Publishes an event to all subscribed handlers.
   * @param event The domain event to publish
   */
  async publish<T extends IDomainEvent>(event: T): Promise<void> {
    const eventName = event.constructor.name;
    const eventHandlers = this.handlers.get(eventName) || [];

    const publishPromises = eventHandlers.map(handler => 
      handler.handle(event).catch(error => {
        console.error(`Error handling event ${eventName}:`, error);
      })
    );

    await Promise.all(publishPromises);
  }

  /**
   * Subscribes an event handler to a specific event type.
   * @param eventType The class/type of the event
   * @param handler The handler that will process events of this type
   */
  subscribe<T extends IDomainEvent>(
    eventType: new (...args: any[]) => T,
    handler: IEventHandler<T>
  ): void {
    const eventName = this.getEventName(eventType);
    const handlers = this.handlers.get(eventName) || [];
    
    // Cast is safe since we're ensuring the handler accepts the same type as the event
    handlers.push(handler as unknown as IEventHandler<IDomainEvent>);
    this.handlers.set(eventName, handlers);
  }

  /**
   * Unsubscribes an event handler from a specific event type.
   * @param eventType The class/type of the event
   * @param handler The handler to unsubscribe
   */
  unsubscribe<T extends IDomainEvent>(
    eventType: new (...args: any[]) => T,
    handler: IEventHandler<T>
  ): void {
    const eventName = this.getEventName(eventType);
    const handlers = this.handlers.get(eventName) || [];
    
    const handlerIndex = handlers.findIndex(h => h === handler);
    if (handlerIndex >= 0) {
      handlers.splice(handlerIndex, 1);
      this.handlers.set(eventName, handlers);
    }
  }
}

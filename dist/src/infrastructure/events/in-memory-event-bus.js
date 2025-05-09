/**
 * In-memory implementation of the event bus.
 * This implementation stores event handlers in memory and dispatches events synchronously.
 * In a production environment, this might be replaced with a more robust solution.
 */
export class InMemoryEventBus {
    constructor() {
        // Map of event types to their handlers
        this.handlers = new Map();
    }
    /**
     * Get the name of an event type as a string.
     */
    getEventName(eventType) {
        return eventType.name;
    }
    /**
     * Publishes an event to all subscribed handlers.
     * @param event The domain event to publish
     */
    async publish(event) {
        const eventName = event.constructor.name;
        const eventHandlers = this.handlers.get(eventName) || [];
        const publishPromises = eventHandlers.map(handler => handler.handle(event).catch(error => {
            console.error(`Error handling event ${eventName}:`, error);
        }));
        await Promise.all(publishPromises);
    }
    /**
     * Subscribes an event handler to a specific event type.
     * @param eventType The class/type of the event
     * @param handler The handler that will process events of this type
     */
    subscribe(eventType, handler) {
        const eventName = this.getEventName(eventType);
        const handlers = this.handlers.get(eventName) || [];
        // Cast is safe since we're ensuring the handler accepts the same type as the event
        handlers.push(handler);
        this.handlers.set(eventName, handlers);
    }
    /**
     * Unsubscribes an event handler from a specific event type.
     * @param eventType The class/type of the event
     * @param handler The handler to unsubscribe
     */
    unsubscribe(eventType, handler) {
        const eventName = this.getEventName(eventType);
        const handlers = this.handlers.get(eventName) || [];
        const handlerIndex = handlers.findIndex(h => h === handler);
        if (handlerIndex >= 0) {
            handlers.splice(handlerIndex, 1);
            this.handlers.set(eventName, handlers);
        }
    }
}

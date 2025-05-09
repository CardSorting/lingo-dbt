/**
 * In-memory implementation of the query bus.
 * This implementation stores query handlers in memory and dispatches queries synchronously.
 */
export class InMemoryQueryBus {
    constructor() {
        this.handlers = new Map();
    }
    /**
     * Registers a query handler for a specific query type.
     * @param queryType The query class/constructor
     * @param handler The handler that will process queries of this type
     */
    registerHandler(queryType, handler) {
        const queryName = queryType.name;
        if (this.handlers.has(queryName)) {
            throw new Error(`Query handler for '${queryName}' already registered`);
        }
        // We know this cast is safe because we're ensuring the handler accepts the same type as the query
        this.handlers.set(queryName, handler);
    }
    /**
     * Executes a query by dispatching it to the appropriate handler.
     * @param query The query to execute
     */
    async execute(query) {
        const queryName = query.constructor.name;
        const handler = this.handlers.get(queryName);
        if (!handler) {
            throw new Error(`No handler registered for query '${queryName}'`);
        }
        return handler.execute(query);
    }
}

import { IQuery, IQueryBus, IQueryHandler } from '../../application/queries/query.interface';

/**
 * In-memory implementation of the query bus.
 * This implementation stores query handlers in memory and dispatches queries synchronously.
 */
export class InMemoryQueryBus implements IQueryBus {
  private handlers = new Map<string, IQueryHandler<IQuery<any>, any>>();

  /**
   * Registers a query handler for a specific query type.
   * @param queryType The query class/constructor
   * @param handler The handler that will process queries of this type
   */
  registerHandler<TQuery extends IQuery<TResult>, TResult>(
    queryType: new (...args: any[]) => TQuery,
    handler: IQueryHandler<TQuery, TResult>
  ): void {
    const queryName = queryType.name;
    if (this.handlers.has(queryName)) {
      throw new Error(`Query handler for '${queryName}' already registered`);
    }

    // We know this cast is safe because we're ensuring the handler accepts the same type as the query
    this.handlers.set(queryName, handler as IQueryHandler<IQuery<any>, any>);
  }

  /**
   * Executes a query by dispatching it to the appropriate handler.
   * @param query The query to execute
   */
  async execute<TResult>(query: IQuery<TResult>): Promise<TResult> {
    const queryName = query.constructor.name;
    const handler = this.handlers.get(queryName);

    if (!handler) {
      throw new Error(`No handler registered for query '${queryName}'`);
    }

    return handler.execute(query) as Promise<TResult>;
  }
}

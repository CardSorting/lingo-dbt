/**
 * Marker interface for query objects.
 * Queries represent requests for data that do not change the system state.
 * This is part of the CQRS pattern.
 */
export interface IQuery<TResult> {
  // This is a marker interface that may be extended with common query properties
}

/**
 * Interface for handlers that process specific query types.
 * Query handlers retrieve and return data without side effects.
 */
export interface IQueryHandler<TQuery extends IQuery<TResult>, TResult> {
  /**
   * Executes the query and returns the result.
   * @param query The query to execute
   */
  execute(query: TQuery): Promise<TResult>;
}

/**
 * Service for dispatching queries to their appropriate handlers.
 */
export interface IQueryBus {
  /**
   * Executes a query by dispatching it to the appropriate query handler.
   * @param query The query to execute
   */
  execute<TResult>(query: IQuery<TResult>): Promise<TResult>;
}

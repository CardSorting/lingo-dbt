/**
 * Base interface for all domain events.
 * Domain events represent something that happened in the domain that domain experts care about.
 */
export interface IDomainEvent {
  /**
   * The date and time when the event occurred.
   */
  readonly occurredAt: Date;
  
  /**
   * A unique identifier for the event instance.
   */
  readonly eventId: string;
}

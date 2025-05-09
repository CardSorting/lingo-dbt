import { v4 as uuidv4 } from 'uuid';
/**
 * Base class for all domain events.
 * Implements common functionality like event ID generation and timestamp.
 */
export class BaseDomainEvent {
    /**
     * Creates a new domain event.
     * @param data Additional data for the event (specific to each event subclass)
     */
    constructor() {
        this.eventId = uuidv4();
        this.occurredAt = new Date();
    }
}

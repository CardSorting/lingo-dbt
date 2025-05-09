import { BaseDomainEvent } from './base-domain-event';

/**
 * Event fired when a new user is registered in the system.
 * This event can trigger welcome emails, initial progress setup, etc.
 */
export class UserRegisteredEvent extends BaseDomainEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly isPasswordBased: boolean
  ) {
    super();
  }
}

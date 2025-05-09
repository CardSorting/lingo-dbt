import { BaseDomainEvent } from './base-domain-event';

/**
 * Event fired when a user completes an exercise, regardless of correctness.
 * This event can trigger XP updates, streak calculations, and achievement checks.
 */
export class ExerciseCompletedEvent extends BaseDomainEvent {
  constructor(
    public readonly userId: string,
    public readonly exerciseId: string,
    public readonly lessonId: string,
    public readonly skillId: string,
    public readonly moduleId: string,
    public readonly isCorrect: boolean,
    public readonly userAnswer: string,
    public readonly attemptCount: number
  ) {
    super();
  }
}

import { BaseDomainEvent } from './base-domain-event';
/**
 * Event fired when a user completes an exercise, regardless of correctness.
 * This event can trigger XP updates, streak calculations, and achievement checks.
 */
export class ExerciseCompletedEvent extends BaseDomainEvent {
    constructor(userId, exerciseId, lessonId, skillId, moduleId, isCorrect, userAnswer, attemptCount) {
        super();
        this.userId = userId;
        this.exerciseId = exerciseId;
        this.lessonId = lessonId;
        this.skillId = skillId;
        this.moduleId = moduleId;
        this.isCorrect = isCorrect;
        this.userAnswer = userAnswer;
        this.attemptCount = attemptCount;
    }
}

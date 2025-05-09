import { ExerciseCompletedEvent } from '../../core/events/exercise-completed.event';
/**
 * Handler for the CompleteExerciseCommand.
 * This handler checks if the answer is correct, updates progress, and emits events.
 */
export class CompleteExerciseCommandHandler {
    constructor(learningReadRepository, progressWriteRepository, eventBus) {
        this.learningReadRepository = learningReadRepository;
        this.progressWriteRepository = progressWriteRepository;
        this.eventBus = eventBus;
    }
    /**
     * Execute the command to complete an exercise.
     * @param command The command containing the exercise attempt data
     * @returns Boolean indicating if the answer was correct
     */
    async execute(command) {
        const { userId, exerciseId, userAnswer } = command;
        // 1. Get the exercise to validate the answer
        const exercise = await this.learningReadRepository.getExerciseById(exerciseId);
        if (!exercise) {
            throw new Error(`Exercise not found: ${exerciseId}`);
        }
        // 2. Get the lesson, skill, and module information for the exercise
        const lesson = await this.learningReadRepository.getLessonById(exercise.lessonId);
        if (!lesson) {
            throw new Error(`Lesson not found: ${exercise.lessonId}`);
        }
        const skill = await this.learningReadRepository.getSkillById(lesson.skillId);
        if (!skill) {
            throw new Error(`Skill not found: ${lesson.skillId}`);
        }
        // 3. Check if the answer is correct
        // Note: In a real implementation, we'd need more sophisticated answer checking
        // based on exercise type (multiple choice, text input, etc.)
        const isCorrect = this.checkAnswer(exercise.correctAnswer, userAnswer);
        // 4. Get or create lesson progress
        const lessonProgress = await this.progressWriteRepository.getOrCreateLessonProgress(userId, lesson.id, skill.id, skill.moduleId);
        // 5. Record the exercise attempt
        const attemptCount = lessonProgress.attemptCount + 1;
        await this.progressWriteRepository.recordExerciseAttempt({
            lessonProgressId: lessonProgress.id,
            exerciseId,
            isCorrect,
            userAnswer,
            attemptedAt: new Date()
        });
        // 6. Update lesson progress
        await this.progressWriteRepository.updateLessonProgress(lessonProgress.id, {
            attemptCount,
            // If this was the last exercise and it's correct, mark the lesson as completed
            isCompleted: lessonProgress.isCompleted ||
                (isCorrect && await this.isLastExerciseInLesson(lessonProgress.id, exerciseId)),
            completedAt: lessonProgress.isCompleted ? lessonProgress.completedAt :
                (isCorrect ? new Date() : undefined)
        });
        // 7. If correct, award XP and update user progress
        if (isCorrect) {
            await this.progressWriteRepository.addUserXp(userId, lesson.xpReward);
            await this.progressWriteRepository.updateUserStreak(userId);
        }
        // 8. Emit domain event for the completed exercise
        await this.eventBus.publish(new ExerciseCompletedEvent(userId, exerciseId, lesson.id, skill.id, skill.moduleId, isCorrect, userAnswer, attemptCount));
        // Return whether the answer was correct
        return isCorrect;
    }
    /**
     * Check if an answer is correct.
     * This is a simplified implementation that just does string comparison.
     * In a real app, this would be more sophisticated based on exercise type.
     */
    checkAnswer(correctAnswer, userAnswer) {
        return correctAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase();
    }
    /**
     * Check if this is the last exercise in the lesson.
     */
    async isLastExerciseInLesson(lessonProgressId, exerciseId) {
        // Here we would check if all exercises in the lesson have been completed
        // This is a simplified implementation
        return true; // For now, assume it's the last exercise
    }
}

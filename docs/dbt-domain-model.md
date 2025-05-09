# DBT Domain Model

This document outlines the domain model for the DBT (Dialectical Behavioral Therapy) learning content in the LinGo-DBT application.

## Overview

Dialectical Behavioral Therapy (DBT) is a structured therapeutic approach that includes four main skills modules:

1. **Mindfulness**: Being present and aware in the moment
2. **Distress Tolerance**: Handling crisis situations effectively
3. **Emotion Regulation**: Understanding and managing emotions
4. **Interpersonal Effectiveness**: Navigating relationships effectively

Our application models these concepts using a hierarchical structure:

```
Module -> Skills -> Lessons -> Exercises
```

## Domain Structure

### Modules

Modules represent the main DBT skill areas. Each module contains multiple skills.

| Module | Description |
|--------|-------------|
| Mindfulness | Learning to be fully aware and present in the moment |
| Distress Tolerance | Building skills to tolerate pain in difficult situations |
| Emotion Regulation | Learning to manage and change intense emotions |
| Interpersonal Effectiveness | Learning strategies for asserting needs and setting boundaries |

### Skills

Skills are specific techniques or concepts within a module.

#### Mindfulness Skills

| Skill | Description |
|-------|-------------|
| Wise Mind | Balancing emotional mind and reasonable mind |
| What Skills | Observing, describing, and participating without judgment |
| How Skills | Being non-judgmental, one-mindful, and effective |

#### Distress Tolerance Skills

| Skill | Description |
|-------|-------------|
| STOP | Stop, Take a step back, Observe, Proceed mindfully |
| TIPP | Temperature, Intense exercise, Paced breathing, Progressive relaxation |
| Self-Soothing | Using the five senses to calm yourself |
| Radical Acceptance | Accepting reality as it is without fighting it |

#### Emotion Regulation Skills

| Skill | Description |
|-------|-------------|
| Identifying Emotions | Recognizing and naming emotions |
| Check the Facts | Examining if your emotional response fits the facts |
| Opposite Action | Acting opposite to the current emotion's urge |
| PLEASE | PhysicaL health, Eating balanced, Avoid mood-altering drugs, Sleep, Exercise |

#### Interpersonal Effectiveness Skills

| Skill | Description |
|-------|-------------|
| DEAR MAN | Describe, Express, Assert, Reinforce, stay Mindful, Appear confident, Negotiate |
| GIVE | Gentle, Interested, Validate, Easy manner |
| FAST | be Fair, no Apologies, Stick to values, be Truthful |

### Lessons

Lessons are specific teaching units for each skill. For example, the "Wise Mind" skill might have these lessons:

1. Introduction to Wise Mind
2. Recognizing Emotional Mind
3. Recognizing Reasonable Mind
4. Practicing Wise Mind
5. Applying Wise Mind in Daily Life

### Exercises

Exercises are interactive activities for practicing a skill taught in a lesson. Each exercise has specific types:

#### Exercise Types

| Type | Description | Example |
|------|-------------|---------|
| Multiple Choice | Select the correct answer from options | "Which of these is an example of using Wise Mind?" |
| Text Input | Type in the correct answer | "What are the three states of mind in DBT?" |
| Matching | Match related concepts | "Match each state of mind with its description" |
| Reflection | Write about personal experiences | "Describe a time when you used Wise Mind" |
| Scenario | Apply skills to a hypothetical situation | "How would you use DEAR MAN in this conversation?" |
| Fill in the Blank | Complete sentences with correct terms | "The balance between emotional mind and reasonable mind is called ____" |

## User Progress Model

The user's progress through the DBT content is tracked at multiple levels:

1. **Overall Progress**: Total XP, level, streaks
2. **Module Progress**: Completion percentage for each module
3. **Skill Progress**: Mastery level for each skill
4. **Lesson Progress**: Completion status for each lesson
5. **Exercise Attempts**: History of attempts for each exercise

## Gamification Elements

Gamification elements are tied to the learning progress:

### Achievements

| Achievement | Description | Criteria |
|-------------|-------------|----------|
| Mindfulness Beginner | Started the mindfulness journey | Complete first mindfulness lesson |
| Mindfulness Master | Mastered mindfulness skills | Complete all mindfulness skills with at least 80% correct |
| Daily Practice | Committed to regular practice | Complete at least one exercise per day for 7 consecutive days |
| Perfect Lesson | Mastered a lesson perfectly | Complete all exercises in a lesson with 100% accuracy |
| Weekly Streak | Consistent weekly practice | Log in and complete exercises for 7 consecutive days |
| Monthly Dedication | Long-term commitment | Maintain a streak for 30 days |

### XP and Levels

XP (Experience Points) are awarded for:

- Completing exercises (10-20 XP based on difficulty)
- Completing lessons (50 XP)
- Mastering skills (100 XP)
- Completing modules (300 XP)
- Earning achievements (50-200 XP)
- Maintaining streaks (10 XP per day)

Levels are calculated based on accumulated XP:
- Level 1: 0-99 XP
- Level 2: 100-299 XP
- Level 3: 300-599 XP
- And so on...

## Implementation Notes

When implementing this domain model in the application:

1. **Content Management**: The DBT content should be stored in the database with appropriate relationships between modules, skills, lessons, and exercises.

2. **Progress Tracking**: User progress should be tracked at each level (module, skill, lesson, exercise) to provide granular feedback.

3. **Adaptive Learning**: The system should adapt to user progress, unlocking new content as the user demonstrates mastery.

4. **Permissions and Access**: Consider which content should be available to all users versus premium content.

5. **Content Expansion**: The system should be designed to easily add new modules, skills, lessons, and exercises over time.

6. **Versioning**: Consider a versioning strategy for updates to DBT content to maintain consistency for existing users.

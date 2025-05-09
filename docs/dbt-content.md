# DBT Learning Content Structure

This document outlines the Dialectical Behavior Therapy (DBT) content structure implemented in our Duolingo-inspired learning application. The content is organized hierarchically to facilitate progressive learning and skill development.

## Content Hierarchy

The DBT content follows this hierarchy:

```
Module → Skill → Lesson → Exercise
```

- **Module**: Broad category of DBT skills (e.g., Mindfulness, Distress Tolerance)
- **Skill**: Specific skill set within a module (e.g., Wise Mind, DEAR MAN)
- **Lesson**: Teaching component for a particular aspect of a skill
- **Exercise**: Interactive activities to test knowledge and practice skills

## Modules Overview

Our application includes the four core DBT modules:

### 1. Mindfulness Module

Foundational skills for being fully aware and present in the moment.

**Skills included:**
- **Wise Mind**: Balancing emotional mind and reasonable mind
- **What Skills**: Observe, Describe, and Participate
- **How Skills**: Non-judgmentally, One-mindfully, and Effectively

### 2. Distress Tolerance Module

Skills to tolerate pain in difficult situations without making things worse.

**Skills included:**
- **Crisis Survival Skills**: TIPP, STOP, ACCEPTS, Self-Soothing
- **Reality Acceptance Skills**: Radical Acceptance, Turning the Mind, Willingness
- **IMPROVE the Moment**: Skills to improve difficult moments

### 3. Emotion Regulation Module

Skills to understand, identify, and manage emotions effectively.

**Skills included:**
- **Understanding and Naming Emotions**: Recognizing functions and components of emotions
- **Check the Facts**: Examining if emotional reactions fit the facts
- **Opposite Action**: Changing emotions by acting opposite to emotional urges
- **PLEASE Skills**: Physical care to reduce emotional vulnerability

### 4. Interpersonal Effectiveness Module

Skills for maintaining relationships while achieving objectives and maintaining self-respect.

**Skills included:**
- **DEAR MAN**: Skills for meeting objectives in interpersonal situations
- **GIVE**: Skills for building and maintaining relationships
- **FAST**: Skills for maintaining self-respect

## Exercise Types

The application includes various exercise types to support different learning styles:

1. **Multiple Choice**: Testing knowledge through multiple-choice questions
2. **Text Input**: Free-form responses for reflective exercises
3. **Matching**: Connecting related concepts
4. **Sorting**: Categorizing items correctly
5. **Scenario Response**: Applying skills to realistic situations

## Progression System

Users progress through content with:

- **XP Points**: Earned by completing exercises and lessons
- **Skill Mastery**: Tracked progress in each skill area (1-5 levels)
- **Streaks**: Rewards for consistent daily practice
- **Prerequisites**: Some advanced content unlocks after mastering fundamentals

## Implementation Details

The DBT content is stored in a structured format in our database and follows these design principles:

1. **Scaffolded Learning**: Content builds progressively from fundamental to advanced concepts
2. **Varied Practice**: Multiple exercise types reinforce learning in different ways
3. **Real-World Application**: Content emphasizes practical application of skills
4. **Gamified Engagement**: Streaks, achievements, and XP keep users motivated

## Extending Content

New content can be added by:

1. Creating new exercises in existing lessons
2. Adding new lessons to existing skills
3. Creating new skills within existing modules
4. Adding entirely new modules (specialized DBT adaptations)

## Technical Integration

The content structure aligns with our database schema and domain model:
- DBT modules, skills, lessons, and exercises are stored in their respective database tables
- The application's domain model has corresponding entities
- The client application renders content dynamically based on user progress

This structure allows for flexible content updates without requiring application code changes.

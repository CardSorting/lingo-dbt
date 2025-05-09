# LinGo-DBT Architecture Documentation

This document outlines the architecture of the LinGo-DBT application, a Duolingo-inspired Next.js web app for learning Dialectical Behavioral Therapy (DBT) skills.

## Architecture Overview

LinGo-DBT follows Clean Architecture principles combined with Domain-Driven Design (DDD) and the Command Query Responsibility Segregation (CQRS) pattern:

```
┌─────────────────────────────────────────────────────┐
│                  Presentation Layer                  │
│  (Next.js pages, React components, UI state mgmt)    │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                  Application Layer                   │
│    (Commands, Queries, DTOs, Application Services)   │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                    Domain Layer                      │
│  (Entities, Value Objects, Domain Events, Services)  │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                 Infrastructure Layer                 │
│    (Repositories, External Services, Database)       │
└─────────────────────────────────────────────────────┘
```

## Architectural Principles

### 1. Clean Architecture

We follow Clean Architecture to ensure:
- Independence from frameworks
- Testability
- Independence from UI
- Independence from database
- Independence from external agencies

The dependencies flow inward, with the domain layer at the center having no dependencies on outer layers.

### 2. Domain-Driven Design (DDD)

DDD concepts implemented:
- **Bounded Contexts**: Clear separation of domain models
- **Entities**: Domain objects with identity
- **Value Objects**: Immutable objects defined by their attributes
- **Aggregates**: Consistency boundaries for related entities
- **Domain Events**: For communication between aggregates
- **Repositories**: Persistence abstractions

### 3. Command Query Responsibility Segregation (CQRS)

CQRS separates operations that modify state (Commands) from operations that read state (Queries):

- **Commands**: Change state but don't return data
- **Queries**: Return data but don't change state
- **Command Handlers**: Execute business logic and emit events
- **Query Handlers**: Retrieve and return data

## Bounded Contexts

The application is divided into these bounded contexts:

1. **Identity Context**
   - User authentication
   - User profile management

2. **Learning Context**
   - DBT modules, skills, lessons
   - Exercise types and content

3. **Progress Context**
   - User advancement
   - Tracking completion and attempts

4. **Gamification Context**
   - Achievements
   - Experience points (XP)
   - Streaks

## Folder Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # UI Components
│   ├── features/           # Feature-specific components
│   ├── layouts/            # Layout components
│   └── ui/                 # Reusable UI components
├── core/                   # Domain Layer
│   ├── entities/           # Domain entities
│   ├── valueObjects/       # Value objects
│   ├── events/             # Domain events
│   ├── services/           # Domain services
│   ├── repositories/       # Repository interfaces
│   └── types/              # Domain types
├── application/            # Application Layer
│   ├── commands/           # Command handlers
│   ├── queries/            # Query handlers
│   ├── dtos/               # Data transfer objects
│   ├── interfaces/         # Interfaces
│   └── services/           # Application services
├── infrastructure/         # Infrastructure Layer
│   ├── database/           # Database setup
│   ├── repositories/       # Repository implementations
│   ├── auth/               # Authentication
│   └── services/           # External services
└── utils/                  # Utilities
```

## Domain Model

Our domain model for DBT learning includes:

### Identity Domain

- **User**: Core user identity and profile
- **Account**: External identity providers
- **Session**: User authentication sessions

### Learning Domain

- **Module**: Top-level grouping (e.g., Mindfulness, Emotion Regulation)
- **Skill**: Specific DBT skills within modules
- **Lesson**: Learning content for a skill
- **Exercise**: Interactive activities to practice skills

### Progress Domain

- **UserProgress**: Overall user progress
- **ModuleProgress**: Progress within modules
- **SkillProgress**: Mastery of specific skills
- **LessonProgress**: Completion status of lessons
- **ExerciseAttempt**: Results of exercise attempts

### Gamification Domain

- **Achievement**: Accomplishments users can earn
- **UserAchievement**: Achievements earned by users

## CQRS Implementation

### Commands

Commands represent user intentions to change the system state:

```typescript
// Example Command
export interface CompleteExerciseCommand {
  userId: string;
  exerciseId: string;
  userAnswer: string;
}
```

### Command Handlers

Command Handlers process commands, update state, and emit events:

```typescript
// Example Command Handler
export class CompleteExerciseCommandHandler {
  constructor(
    private exerciseRepo: IExerciseRepository,
    private progressRepo: IProgressRepository,
    private eventBus: IEventBus
  ) {}

  async execute(command: CompleteExerciseCommand): Promise<void> {
    // Business logic
    // Update repositories
    // Emit domain events
  }
}
```

### Queries

Queries request data without changing state:

```typescript
// Example Query
export interface GetUserProgressQuery {
  userId: string;
}
```

### Query Handlers

Query Handlers retrieve and return data:

```typescript
// Example Query Handler
export class GetUserProgressQueryHandler {
  constructor(private progressRepo: IProgressReadRepository) {}

  async execute(query: GetUserProgressQuery): Promise<UserProgressDTO> {
    // Retrieve data
    // Map to DTO
    // Return
  }
}
```

## Event-Driven Architecture

Domain events enable loose coupling between components:

```typescript
// Example Domain Event
export class ExerciseCompletedEvent implements IDomainEvent {
  constructor(
    public readonly userId: string,
    public readonly exerciseId: string,
    public readonly isCorrect: boolean,
    public readonly timestamp: Date
  ) {}
}
```

Events are published by command handlers and subscribed to by event handlers:

```typescript
// Example Event Handler
export class UpdateUserXpOnExerciseCompleted implements IEventHandler<ExerciseCompletedEvent> {
  constructor(private userProgressRepo: IUserProgressWriteRepository) {}

  async handle(event: ExerciseCompletedEvent): Promise<void> {
    // Update user XP
  }
}
```

## API Design

The API layer follows REST principles with specific endpoints for commands and queries:

- **Command Endpoints**: POST/PUT/DELETE with command DTOs
- **Query Endpoints**: GET with query parameters

## UI Architecture

The frontend uses React components with:

- Feature-based organization
- Container/Presentation pattern
- State management with React Hooks and Context

## Testing Strategy

- **Unit Tests**: Domain and application layers
- **Integration Tests**: Infrastructure layer
- **E2E Tests**: User workflows

## Development Guidelines

1. Keep domain logic in the core layer
2. Use commands and queries for all state changes and data retrieval
3. Make entities rich with behavior
4. Use value objects for concepts with no identity
5. Emit domain events for cross-aggregate communication

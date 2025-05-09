# LinGo-DBT: A Duolingo-Inspired DBT Learning App

LinGo-DBT is a Next.js web application that gamifies Dialectical Behavioral Therapy (DBT) skills learning using a Duolingo-inspired approach. The app helps users learn DBT skills through interactive exercises, progress tracking, and gamification elements.

## Project Overview

This application follows a Clean Architecture approach combined with Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS) patterns.

### Key Features

- **DBT Skills Learning**: Structured modules covering core DBT skills (Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness)
- **Interactive Exercises**: Various exercise types to practice DBT skills
- **Progress Tracking**: Track user advancement through modules, skills, and lessons
- **Gamification**: XP, levels, streaks, and achievements to motivate consistent practice
- **User Authentication**: Secure authentication with email/password and OAuth options

## Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **State Management**: Zustand, SWR for data fetching

## Architecture

The application follows Clean Architecture with these layers:

1. **Presentation Layer**: Next.js pages and React components
2. **Application Layer**: Commands, Queries, DTOs, and Application Services
3. **Domain Layer**: Core business logic with Entities, Value Objects, and Domain Events
4. **Infrastructure Layer**: Technical implementations (database, authentication, etc.)

For more details, see [Architecture Documentation](docs/architecture.md).

### Domain Model

The DBT content is structured hierarchically:
- **Modules**: Main DBT skill areas (e.g., Mindfulness, Distress Tolerance)
- **Skills**: Specific techniques within modules (e.g., Wise Mind, DEAR MAN)
- **Lessons**: Step-by-step learning units for each skill
- **Exercises**: Interactive activities for practicing skills

For more details, see [DBT Domain Model](docs/dbt-domain-model.md).

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL database

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/lingo-dbt.git
   cd lingo-dbt
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your database connection string and other configuration.

4. Set up the database
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

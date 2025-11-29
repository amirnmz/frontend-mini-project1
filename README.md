# Next.js 14 Production-Ready Authentication App

A complete Next.js 14 application with JWT authentication, httpOnly cookies, TypeScript, Zod validation, and comprehensive code quality tools.

## Features

- **Authentication System**
  - JWT-based authentication with httpOnly cookies
  - Protected routes via middleware
  - Automatic redirects for authenticated/unauthenticated users
  - Login/logout functionality

- **Tech Stack**
  - Next.js 14 (App Router)
  - TypeScript (strict mode)
  - React Hook Form + Zod validation
  - TailwindCSS for styling
  - next-themes for dark/light mode
  - Atomic Design architecture

- **Code Quality**
  - Husky for git hooks
  - lint-staged for pre-commit checks
  - ESLint + Prettier
  - Commitlint for conventional commits
  - TypeScript strict mode

- **Dashboard**
  - Server-side data fetching
  - Zod schema validation for API responses
  - Responsive grid layout
  - Error handling and loading states

## Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up Husky (if not auto-installed):**
   \`\`\`bash
   npm run prepare
   \`\`\`

3. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open [http://localhost:3000](http://localhost:3000)**

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   └── auth/           # Authentication API routes
│   ├── dashboard/          # Protected dashboard page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Login page
├── components/
│   ├── atoms/              # Atomic components (Button, Input)
│   ├── molecules/          # Molecular components (FormField)
│   └── organisms/          # Organism components (LoginForm)
├── lib/
│   ├── auth.ts             # JWT token utilities
│   ├── zod-schemas.ts      # Zod validation schemas
│   └── utils.ts            # Utility functions
├── services/
│   └── postsService.ts     # API service layer
└── middleware.ts           # Route protection
\`\`\`

## Authentication Flow

1. User enters credentials on login page
2. Form validates with Zod schema
3. POST request to `/api/auth/login`
4. Server creates JWT token and sets httpOnly cookie
5. Middleware protects `/dashboard` route
6. User is redirected to dashboard on success

## Git Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code formatting
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

Example: `feat: add user profile page`

## Environment Variables

Create a `.env.local` file:

\`\`\`
JWT_SECRET=your-secret-key-here
\`\`\`

## License

MIT

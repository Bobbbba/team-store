# Team Store

An online store developed as a team project as part of the **Rolling Scopes School** Full Stack Engineering course.

## Technologies

- TypeScript
- Vite
- HTML5
- CSS3
- ESLint
- Prettier
- Stylelint
- Vitest
- Husky
- lint-staged
- GitHub Actions

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd team-store
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start development server         |
| `npm run build`        | Type-check and build the project |
| `npm run preview`      | Preview production build         |
| `npm run lint`         | Run ESLint                       |
| `npm run lint:fix`     | Fix ESLint issues                |
| `npm run lint:css`     | Run Stylelint                    |
| `npm run format`       | Format files with Prettier       |
| `npm run format:check` | Check code formatting            |
| `npm test`             | Run Vitest in watch mode         |
| `npm run test:run`     | Run tests once                   |

## Code Quality

The project uses automated tools to maintain code quality and consistency:

- **ESLint** — JavaScript and TypeScript code analysis.
- **Stylelint** — CSS code analysis.
- **Prettier** — consistent code formatting.
- **Vitest** — unit testing.
- **Husky and lint-staged** — automatic checks before commits.
- **GitHub Actions** — automated checks on push and pull requests.

## Project Structure

```text
team-store/
├── .github/
├── .husky/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   └── main.ts
├── tests/
├── index.html
├── package.json
├── tsconfig.json
├── eslint.config.js
├── stylelint.config.mjs
└── .prettierrc
```

## Git Workflow

The project follows a feature branch workflow:

- `main` — stable version of the project.
- `develop` — main development branch.
- `feature/*` — branches for individual tasks.

Changes are submitted through Pull Requests to `develop` and reviewed by team members before merging.

## Team

Developed collaboratively as part of the Rolling Scopes School Full Stack Engineering course.

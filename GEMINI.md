# GEMINI.md

This file serves as the instructional context and repository guide for Gemini CLI and other AI agents operating within this workspace. It documents the architecture, directory structure, commands, and development conventions of the **FoodSmash** application.

---

## 1. Project Overview

**FoodSmash** is a Nuxt 3 / Vue 3 application built to demonstrate and explore unique or unusual food combinations recommended by a community of food lovers. It leverages modern Vue features and Nuxt's next-generation directory architecture.

### Core Technology Stack

- **Framework:** [Nuxt 3](https://nuxt.com/) (configured with Nuxt 4 directory structure compatibility).
- **Frontend Library:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>` with TypeScript).
- **Icons:** [lucide-vue-next](https://lucide.dev/) for modern and clean iconography.
- **Styling:** Vanilla CSS with modern CSS variables, supporting a rich dark-theme aesthetic (with pink and cyan accents).
- **Testing:** [Vitest](https://vitest.dev/) along with [@nuxt/test-utils](https://nuxt.com/docs/community/contribution#testing) for full Nuxt environment integration testing.
- **Environment:** Node.js, configured for development workspaces (including Project IDX via `.idx/dev.nix`).

---

## 2. Directory Structure

The workspace is organized as follows:

```
/home/user/blankdonotdelete/
├── .gitignore
├── .idx/
│   └── dev.nix              # Google IDX environment configuration (Node.js)
├── nuxt.config.ts           # Nuxt configuration (CSS, modules, and compatibility settings)
├── package.json             # Scripts, dependencies, and metadata
├── tsconfig.json            # TypeScript configuration (extends generated Nuxt tsconfig)
├── vitest.config.ts         # Vitest configuration for unit & Nuxt integration testing
├── README.md                # General introduction and basic setup instructions
├── GEMINI.md                # This file (Agent instructions & conventions)
├── public/                  # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── app/                     # Main Nuxt 4 application folder
│   ├── app.vue              # Root Nuxt entry point
│   ├── assets/
│   │   └── css/
│   │       └── main.css     # Global styles and custom CSS variables
│   ├── layouts/
│   │   └── default.vue      # Layout with Header, Navigation (NuxtLink), and Footer
│   └── pages/
│       ├── index.vue        # Homepage with recent combos & features list
│       └── create.vue       # Form to create/submit new combos
└── test/                    # Automated testing suite
    └── nuxt/
        ├── homepage.test.ts # Integration tests for pages/index.vue
        └── create.test.ts   # Integration tests for pages/create.vue
```

---

## 3. Building and Running

Use the following npm scripts (configured in `package.json`) to develop, build, and test the application:

| Command            | Description                                                    |
| :----------------- | :------------------------------------------------------------- |
| `npm install`      | Installs the project dependencies.                             |
| `npm run dev`      | Starts the Nuxt development server at `http://localhost:3000`. |
| `npm run build`    | Builds the application for production deployment.              |
| `npm run generate` | Generates a static-site export of the application.             |
| `npm run preview`  | Runs a local preview of the production build.                  |
| `npm run test`     | Runs the Vitest test suite.                                    |

---

## 4. Development Conventions

To maintain consistency and code quality across the codebase, adhere to the following development conventions:

### Vue & Nuxt Best Practices

- **Composition API:** Always use the Vue 3 Composition API with `<script setup lang="ts">`.
- **Directory Structure:** This project conforms to Nuxt's modern folder structures (e.g. `app/` contains `pages`, `layouts`, `assets`, etc.). Keep new page components within `app/pages/` and custom layouts within `app/layouts/`.
- **Navigation:** Use `<NuxtLink>` for client-side navigation instead of plain standard anchor tags (`<a>`).

### Styling Guidelines

- **Vanilla CSS:** Maintain and extend styles within `app/assets/css/main.css`. Avoid adding external heavy utility frameworks (like TailwindCSS) unless explicitly instructed.
- **Theming & CSS Variables:** Leverage the CSS custom properties defined in `:root` inside `main.css`:
  - `--background-color` (Dark blue: `#1A1A2E`)
  - `--background-light` (Lighter blue-gray: `#3A3A60`)
  - `--component-bg-color` (Vibrant container background: `#2C2C54`)
  - `--primary-accent-color` (Vibrant Pink: `#ff74ef`)
  - `--secondary-accent-color` (Vibrant Cyan: `#86e5ff`)
  - `--text-color` (Off-white: `#EAEAEA`)

### Icons

- Import icons from `lucide-vue-next` (e.g., `import { BookOpen, Users, Star } from 'lucide-vue-next'`).

---

## 5. Testing Conventions

The project has a robust testing suite configured via **Vitest** and **@nuxt/test-utils**.

### Project Types

As defined in `vitest.config.ts`, there are two test configurations:

1. **`unit` (Unit/E2E Project):** Includes tests matching `test/{e2e,unit}/*.{test,spec}.ts` running in a standard `node` environment.
2. **`nuxt` (Nuxt Integration Project):** Includes tests matching `test/nuxt/*.{test,spec}.ts` running in a full `nuxt` environment.

### Writing Tests

- Always place page or Nuxt-specific component tests in the `test/nuxt/` folder.
- Use `mountSuspended` from `@nuxt/test-utils/runtime` to asynchronously mount Nuxt components and pages during tests.
- Leverage standard `vitest` assertions and utility functions (such as `vi.spyOn` for mocking/spying console output or API calls).

#### Example Test Pattern

```typescript
import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import MyComponent from "../../app/pages/my-component.vue";

describe("MyComponent", () => {
  it("should render correctly", async () => {
    const wrapper = await mountSuspended(MyComponent);
    expect(wrapper.html()).toContain("Expected Text");
  });
});
```

---

## 6. Guidelines for AI Agents

When modifying this repository, ensure that you:

1. **Never suppress warnings or bypass the type system.** Avoid the use of `any` casts or prototype hacks.
2. **Implement corresponding tests** whenever you add features, modify existing components, or fix bugs. Place them under the appropriate test category in the `test/` directory.
3. **Verify all changes** by running the test suite (`npm run test`) and ensuring everything passes before final submission.

### Additional Coding Preferences

- Do not use semicolons for any JavaScript/TypeScript.
- Do not use Tailwind classes in component templates.
- Keep project dependencies minimal.
- Use relative imports and NOT a path alias.

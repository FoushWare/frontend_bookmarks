# Adding New CSS Topic Projects

This guide explains how to add new interactive projects for CSS topics (Grid, Background, Border, etc.) to the Learning Hub.

## Architecture Overview

The projects system uses:
- **Astro** for static pages and routing
- **React** (via `@astrojs/react`) for the interactive workspace component
- **TypeScript** for type safety
- **CodeMirror** for the code editor

## File Structure

```
src/
├── types/
│   └── project.ts              # TypeScript interfaces for projects
├── data/
│   └── flexbox-projects.ts     # Flexbox project data (example)
├── hooks/
│   ├── useLivePreview.ts       # Hook for live preview generation
│   └── useTestRunner.ts        # Hook for running automated tests
├── components/
│   ├── ProjectWorkspace.tsx    # React component for interactive workspace
│   └── ProjectGrid.astro       # Astro component for project card grid
└── pages/projects/
    └── flexbox/
        ├── index.astro         # Flexbox projects listing page
        └── [id].astro          # Dynamic route for individual projects
```

## Adding a New Topic

### Step 1: Create Project Data File

Create a new file in `src/data/` following the pattern `[topic]-projects.ts`:

```typescript
import type { Project } from '../types/project';

export const gridProjects: Project[] = [
  {
    id: 'grid-template-columns',
    title: 'grid-template-columns',
    difficulty: 'beginner',
    instructions: 'Your instructions here...',
    expectedResult: 'Expected result description...',
    hints: [
      'First hint',
      'Second hint',
      'Third hint'
    ],
    tests: [
      {
        id: 'test-id',
        description: 'Test description',
        check: (doc) => {
          // Test logic using getBoundingClientRect, getComputedStyle, etc.
          const container = doc.querySelector('.container');
          if (!container) return false;
          const styles = window.getComputedStyle(container);
          return styles.display === 'grid';
        }
      }
    ],
    css: {
      starterHtml: `<div class="container">...</div>`,
      starterCode: `.container { /* Add CSS here */ }`,
      solutionCode: `.container { display: grid; /* solution */ }`
    },
    tailwind: {
      starterHtml: `<div class="container">...</div>`,
      starterCode: `<div class="container">...</div>`,
      solutionCode: `<div class="grid">...</div>`
    }
  }
];
```

**Important:**
- Tests must inspect rendered geometry/computed styles, not raw CSS/HTML text
- This makes tests work for both CSS and Tailwind solutions
- Use `getBoundingClientRect()`, `getComputedStyle()`, and DOM queries

### Step 2: Create Topic Index Page

Create `src/pages/projects/[topic]/index.astro`:

```astro
---
import Layout from '../../../layouts/Layout.astro';
import ProjectGrid from '../../../components/ProjectGrid.astro';
import { gridProjects } from '../../../data/grid-projects';
---

<Layout title="Grid Projects">
  <div class="projects-container">
    <div class="projects-header">
      <h1>🔲 Grid Projects</h1>
      <p>Interactive projects to master CSS Grid properties</p>
    </div>

    <ProjectGrid projects={gridProjects} basePath="/frontend_bookmarks/projects/grid" />

    <div class="back-navigation">
      <a href="/frontend_bookmarks/projects" class="back-button">← Back to All Projects</a>
    </div>
  </div>
</Layout>

<style>
  .projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 50px;
  }

  .projects-header h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    color: #333;
  }

  .projects-header p {
    color: #666;
    font-size: 1.1em;
  }

  .back-navigation {
    text-align: center;
  }

  .back-button {
    display: inline-block;
    padding: 12px 24px;
    background: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.3s;
  }

  .back-button:hover {
    background: #5568d3;
  }
</style>
```

### Step 3: Create Dynamic Route for Individual Projects

Create `src/pages/projects/[topic]/[id].astro`:

```astro
---
import Layout from '../../../layouts/Layout.astro';
import ProjectWorkspace from '../../../components/ProjectWorkspace';
import { gridProjects } from '../../../data/grid-projects';
import type { Project } from '../../../types/project';

export function getStaticPaths() {
  return gridProjects.map((project) => ({
    params: { id: project.id },
  }));
}

const { id } = Astro.params;
const project = gridProjects.find(p => p.id === id);

if (!project) {
  return Astro.redirect(`/frontend_bookmarks/projects/[topic]`);
}
---

<Layout title={`${project.title} - [Topic] Project`}>
  <div class="project-page">
    <ProjectWorkspace client:load project={project} />
  </div>
</Layout>

<style>
  .project-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
  }
</style>
```

**Note:** Replace `[topic]` with your actual topic name (e.g., `grid`, `background`).

### Step 4: Update Main Projects Index

Add your new topic to `src/pages/projects/index.astro`:

```astro
<a href="/frontend_bookmarks/projects/grid" class="topic-card">
  <div class="topic-icon">🔲</div>
  <h2>Grid</h2>
  <p>Master CSS grid for two-dimensional layouts</p>
  <div class="topic-stats">
    <span>{gridProjects.length} Projects</span>
  </div>
</a>
```

## Data Model Reference

### Project Interface

```typescript
interface Project {
  id: string;                    // Unique identifier (used in URL)
  title: string;                 // Display title
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string;          // Problem description
  expectedResult: string;        // Plain-language expected result
  hints: string[];               // Progressive hints (ordered)
  tests: TestCase[];             // Automated test cases
  css: ProjectVariant;           // CSS mode data
  tailwind: ProjectVariant;      // Tailwind mode data
}
```

### TestCase Interface

```typescript
interface TestCase {
  id: string;                    // Unique test identifier
  description: string;           // Human-readable description
  check: (document: Document) => boolean;  // Test function
}
```

### ProjectVariant Interface

```typescript
interface ProjectVariant {
  starterHtml: string;           // HTML for the editor
  starterCode: string;           // Starter CSS/HTML code
  solutionCode: string;          // Full solution code
}
```

## Testing Best Practices

1. **Test rendered output, not code**: Use `getComputedStyle()`, `getBoundingClientRect()`, and DOM queries
2. **Be flexible**: Allow multiple valid approaches to the same layout
3. **Test meaningful properties**: Focus on layout behavior, not implementation details
4. **Provide clear descriptions**: Test descriptions should be understandable to learners

## Example Test Cases

```typescript
// Check if container is a flex container
{
  id: 'flex-display',
  description: 'Container has display: flex',
  check: (doc) => {
    const container = doc.querySelector('.container');
    if (!container) return false;
    const styles = window.getComputedStyle(container);
    return styles.display === 'flex';
  }
}

// Check if items are centered
{
  id: 'align-center',
  description: 'Items are vertically centered',
  check: (doc) => {
    const container = doc.querySelector('.container');
    if (!container) return false;
    const styles = window.getComputedStyle(container);
    return styles.alignItems === 'center';
  }
}

// Check spacing between items
{
  id: 'gap-spacing',
  description: 'Items have 20px gap',
  check: (doc) => {
    const container = doc.querySelector('.container');
    if (!container) return false;
    const styles = window.getComputedStyle(container);
    return styles.gap === '20px';
  }
}
```

## CSS vs Tailwind Mode

- **CSS mode**: Editor shows CSS, HTML is fixed
- **Tailwind mode**: Editor shows HTML with utility classes, no separate CSS
- Both modes use the same test cases (tests inspect rendered output)
- Tailwind mode injects Tailwind Play CDN for live compilation

## Troubleshooting

### Build Errors

- **Missing `getStaticPaths()`**: Dynamic routes require this function to generate static paths
- **Route conflicts**: Ensure old static pages are removed when adding dynamic routes

### Test Failures

- Tests run on the iframe's `document`, not the main document
- Use `window.getComputedStyle()` and `getBoundingClientRect()` for style checks
- Ensure selectors match the actual HTML structure

### Styling Issues

- ProjectWorkspace uses inline styles in a `<style>` tag within the React component
- ProjectGrid uses scoped styles in the Astro component
- Both follow the existing color scheme (#667eea primary, #333 text, etc.)

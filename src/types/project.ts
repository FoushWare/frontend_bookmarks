export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Mode = 'css' | 'tailwind';

export interface TestCase {
  id: string;
  description: string;
  check: (document: Document) => boolean;
}

export interface ProjectVariant {
  starterHtml: string;
  starterCode: string;
  solutionCode: string;
}

export interface Project {
  id: string;
  title: string;
  difficulty: Difficulty;
  instructions: string;
  expectedResult: string;
  hints: string[];
  tests: TestCase[];
  css: ProjectVariant;
  tailwind: ProjectVariant;
}

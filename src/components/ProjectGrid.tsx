import Link from 'next/link';
import type { Project } from '../types/project';

interface ProjectGridProps {
  projects: Project[];
  basePath: string;
}

export function ProjectGrid({ projects, basePath }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`${basePath}/${project.id}`}
          className="bg-surface border border-border rounded-xl p-7 text-text-primary no-underline shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary-600 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="text-3xl mb-4">
              {project.difficulty === 'beginner' && '🟢'}
              {project.difficulty === 'intermediate' && '🟡'}
              {project.difficulty === 'advanced' && '🔴'}
            </div>
            <h2 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h2>
            <p className="text-text-secondary leading-relaxed mb-5 text-sm">{project.expectedResult}</p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                project.difficulty === 'beginner'
                  ? 'bg-emerald-600'
                  : project.difficulty === 'intermediate'
                  ? 'bg-amber-600'
                  : 'bg-rose-600'
              }`}
            >
              {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
            </span>
            <span className="px-3 py-1 bg-surface-2 text-text-secondary rounded-full text-xs font-medium">
              {project.tests.length} tests
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectGrid;

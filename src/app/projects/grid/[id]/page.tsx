import { notFound } from 'next/navigation';
import { gridProjects } from '@/data/grid-projects';
import ProjectWorkspace from '@/components/ProjectWorkspace';

export function generateStaticParams() {
  return gridProjects.map((project) => ({
    id: project.id,
  }));
}

export default async function GridProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = gridProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2.5rem 1.25rem' }}>
      <ProjectWorkspace projectId={id} projectType="grid" />
    </div>
  );
}

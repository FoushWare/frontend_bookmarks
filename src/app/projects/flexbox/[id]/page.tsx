import { notFound } from 'next/navigation';
import { flexboxProjects } from '@/data/flexbox-projects';
import ProjectWorkspace from '@/components/ProjectWorkspace';

export function generateStaticParams() {
  return flexboxProjects.map((project) => ({
    id: project.id,
  }));
}

export default async function FlexboxProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = flexboxProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2.5rem 1.25rem' }}>
      <ProjectWorkspace projectId={id} projectType="flexbox" />
    </div>
  );
}

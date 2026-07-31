import { ReactNode } from 'react';

interface ChallengeLayoutProps {
  learningPanel: ReactNode;
  editorPanel: ReactNode;
}

export function ChallengeLayout({ learningPanel, editorPanel }: ChallengeLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#1e1e1e]">
      <aside className="w-full lg:w-[400px] bg-[#252526] p-[30px] overflow-y-auto border-r border-[#3c3c3c] max-h-[50vh] lg:max-h-none">
        {learningPanel}
      </aside>
      <main className="flex-1 flex flex-col bg-[#1e1e1e] h-[50vh] lg:h-auto">
        {editorPanel}
      </main>
    </div>
  );
}

export default ChallengeLayout;

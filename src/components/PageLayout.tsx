'use client';

import React from 'react';

interface PageLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function PageLayout({ sidebar, children }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <aside className="page-sidebar">
        {sidebar}
      </aside>
      <main className="page-content">
        {children}
      </main>
    </div>
  );
}
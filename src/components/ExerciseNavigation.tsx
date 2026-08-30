'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ExerciseNavigationProps {
  exerciseTitle: string;
  exerciseNumber?: string;
  difficulty?: string;
}

export default function ExerciseNavigation({
  exerciseTitle,
  exerciseNumber,
  difficulty = 'beginner',
}: ExerciseNavigationProps) {
  const pathname = usePathname();

  // Extract topic from path like /exercises/flexbox/testimonial-card
  const topicMatch = pathname?.match(/\/exercises\/([^\/]+)/);
  const topic = topicMatch ? topicMatch[1] : 'flexbox';

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Back navigation */}
      <Link
        href={`/exercises/${topic}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          color: 'var(--text)',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 500,
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--surface-3)';
          e.currentTarget.style.borderColor = 'var(--border-strong)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--surface-2)';
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
        ← Back to {topic.charAt(0).toUpperCase() + topic.slice(1)} Exercises
      </Link>

      {/* Breadcrumb */}
      <div style={{ 
        fontSize: '12px', 
        color: 'var(--muted)', 
        marginTop: '12px', 
        fontFamily: 'monospace', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px' 
      }}>
        <Link 
          href="/css"
          style={{ color: 'var(--teal)', fontWeight: 600, textDecoration: 'none' }}
        >
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </Link>
        <span style={{ opacity: 0.5 }}>→</span>
        <Link 
          href={`/exercises/${topic}`}
          style={{ color: 'var(--teal)', fontWeight: 600, textDecoration: 'none' }}
        >
          Exercises
        </Link>
        <span style={{ opacity: 0.5 }}>→</span>
        <span style={{ color: 'var(--text)', fontWeight: 600 }}>{exerciseTitle}</span>
      </div>

      {/* Exercise info */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
        {exerciseNumber && (
          <span style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            padding: '6px 12px', 
            borderRadius: '8px', 
            background: 'var(--coral-dim)', 
            color: 'var(--coral)', 
            border: '1px solid rgba(255,107,74,.3)', 
            fontWeight: 600 
          }}>
            {exerciseNumber}
          </span>
        )}
        <span style={{ 
          fontFamily: 'monospace', 
          fontSize: '12px', 
          padding: '6px 12px', 
          borderRadius: '8px', 
          background: 
            difficulty === 'beginner' 
              ? 'rgba(16, 185, 129, 0.1)' 
              : difficulty === 'intermediate' 
                ? 'rgba(245, 158, 11, 0.1)' 
                : 'rgba(239, 68, 68, 0.1)',
          color: 
            difficulty === 'beginner' 
              ? '#059669' 
              : difficulty === 'intermediate' 
                ? '#d97706' 
                : '#dc2626',
          border: '1px solid var(--border)',
          fontWeight: 600 
        }}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
    </div>
  );
}
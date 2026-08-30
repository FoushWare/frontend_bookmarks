import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';
import MobileMenuToggle from '@/components/MobileMenuToggle';
import NavLinks from '@/components/NavLinks';
import ThemeToggle from '@/components/ThemeToggle';
import ColorPalettePicker from '@/components/ColorPalettePicker';
import LanguageSwitcher from '@/components/LanguageSwitcher';
// @ts-ignore - CSS import
import './globals.css';

export const metadata: Metadata = {
  title: 'Frontend Bookmarks — Master Modern Web Development',
  description:
    'Interactive frontend learning platform. Master HTML, CSS, JavaScript, Design Patterns, and ace your next interview.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&family=Cairo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Block flash of unstyled theme / palette */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Set default language to Arabic
                  if (!localStorage.getItem('language')) {
                    localStorage.setItem('language', 'ar');
                  }
                  const lang = localStorage.getItem('language') || 'ar';
                  const isArabic = lang === 'ar';
                  
                  document.documentElement.lang = lang;
                  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
                  document.documentElement.style.fontFamily = isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif";

                  var s = localStorage.getItem('theme');
                  var dark = s ? (s === 'dark' || (s === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) : true;
                  document.documentElement.classList.toggle('dark', dark);

                  var palettes = {
                    lime: { accent: '#b5f23d', dark: '#96d121', text: '#1a2e00' },
                    emerald: { accent: '#10b981', dark: '#059669', text: '#ffffff' },
                    indigo: { accent: '#6366f1', dark: '#4f46e5', text: '#ffffff' },
                    cyan: { accent: '#06b6d4', dark: '#0284c7', text: '#ffffff' },
                    rose: { accent: '#f43f5e', dark: '#e11d48', text: '#ffffff' },
                    amber: { accent: '#f59e0b', dark: '#d97706', text: '#ffffff' }
                  };
                  var pId = localStorage.getItem('color-palette');
                  var p = palettes[pId] || palettes.lime;
                  document.documentElement.style.setProperty('--accent', p.accent);
                  document.documentElement.style.setProperty('--accent-dark', p.dark);
                  document.documentElement.style.setProperty('--accent-text', p.text);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <nav className="site-nav">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              maxWidth: '1280px',
              margin: '0 auto',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              <Logo />
              <span>Frontend<span style={{ color: 'var(--accent-dark)' }}> Bookmarks</span></span>
            </Link>

            <MobileMenuToggle />
            <NavLinks />
            <NavLinks isMobile />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LanguageSwitcher />
              <ColorPalettePicker />
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '57px' }}>{children}</main>
      </body>
    </html>
  );
}

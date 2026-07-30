import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from './Logo'
import MobileMenuToggle from './MobileMenuToggle'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'

interface LayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 font-sans text-base leading-relaxed antialiased">
      <nav className="fixed top-0 left-0 right-0 bg-[var(--bg-primary)]/90 backdrop-blur-lg shadow-md z-50 py-3 transition-all duration-300">
        <div className="flex justify-between items-center px-5 max-w-[1400px] mx-auto">
          <a href="/frontend_bookmarks/" className="text-[1.4em] font-bold text-[var(--primary)] no-underline flex items-center gap-3 whitespace-nowrap -tracking-[0.5px]">
            <Logo />
            <span className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] bg-clip-text text-transparent font-bold">Learning Hub</span>
          </a>
          <MobileMenuToggle />
          <NavLinks />
          <NavLinks isMobile />
          <ThemeToggle />
        </div>
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

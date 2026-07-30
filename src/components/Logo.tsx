import { useThemePreference } from './useThemePreference';

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
    <rect x="4" y="6" width="24" height="20" rx="3" />
    <path d="M4 12h24" />
    <path d="M10 16h4" />
    <path d="M18 16h4" />
    <path d="M10 20h4" />
    <path d="M18 20h4" />
  </svg>
);

export function Logo() {
  const { mounted } = useThemePreference();

  if (!mounted) return logo;

  return logo;
}

export default Logo;

import Link from 'next/link';

interface ChallengeNavigationProps {
  previousUrl?: string;
  nextUrl?: string;
}

export function ChallengeNavigation({ previousUrl, nextUrl }: ChallengeNavigationProps) {
  return (
    <div className="flex gap-[10px]">
      {previousUrl && (
        <Link
          href={previousUrl}
          className="flex-1 p-[12px] bg-[#3c3c3c] text-[#d4d4d4] rounded-[8px] text-center no-underline hover:bg-[#4c4c4c] transition-colors"
        >
          ← Previous
        </Link>
      )}
      {nextUrl && (
        <Link
          href={nextUrl}
          className="flex-1 p-[12px] bg-[#3c3c3c] text-[#d4d4d4] rounded-[8px] text-center no-underline hover:bg-[#4c4c4c] transition-colors"
        >
          Next →
        </Link>
      )}
    </div>
  );
}

export default ChallengeNavigation;

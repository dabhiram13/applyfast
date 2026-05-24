import { cn } from '@/lib/utils';

export function ApplyfastMark({ className }: { className?: string }) {
  return (
    <span className={cn('mark', className)} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36.5L50.5 15L41.5 55L31.5 48L39 27.5L13 41L8 36.5Z" fill="#B7F34A"/>
        <path d="M8 47.5L32.5 37L29 48L8 55V47.5Z" fill="white"/>
        <path d="M9.5 45.5L34.5 35L31 46.5L9.5 54V45.5Z" fill="#0D0F12" opacity=".95"/>
      </svg>
    </span>
  );
}

export function ApplyfastLogo({ darkWord = false, className }: { darkWord?: boolean; className?: string }) {
  return (
    <div className={cn('logo', darkWord && 'darkword', className)}>
      <ApplyfastMark />
      <div><span>Apply</span><span>fast</span></div>
    </div>
  );
}

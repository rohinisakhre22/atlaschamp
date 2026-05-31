import { SITE } from '../../constants/site';
import { cn } from '../../lib/cn';

export const LOGO_SRC = '/logo3.png';

type LogoSurface = 'header' | 'footer';

interface LogoProps {
  surface?: LogoSurface;
  /** e.g. "h-8 w-auto" — overrides default surface size */
  className?: string;
}

const surfaceStyles: Record<LogoSurface, string> = {
  header:
    'h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[12rem] md:h-11 md:max-w-none drop-shadow-[0_1px_4px_rgba(37,99,235,0.2)]',
  footer:
    'h-10 w-auto max-w-[12rem] sm:h-11 md:h-12 drop-shadow-[0_0_8px_rgba(96,165,250,0.35)]',
};

export function Logo({ surface = 'header', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        surface === 'footer' &&
          'rounded-md bg-white px-2 py-1.5 shadow-md ring-1 ring-white/25'
      )}
    >
      <img
        src={LOGO_SRC}
        alt={SITE.name}
        className={cn(
          'object-contain object-left',
          surfaceStyles[surface],
          className
        )}
        decoding="async"
        fetchPriority={surface === 'header' ? 'high' : 'auto'}
      />
    </span>
  );
}

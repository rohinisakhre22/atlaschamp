import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function Section({ id, children, className, ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(className)}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}

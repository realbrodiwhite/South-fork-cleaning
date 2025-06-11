import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SectionTitle({ children, className, as: Component = 'h2' }: SectionTitleProps) {
  return (
    <Component className={cn('text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl mb-6', className)}>
      {children}
    </Component>
  );
}

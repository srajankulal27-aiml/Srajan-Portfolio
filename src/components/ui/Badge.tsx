import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          'border-transparent bg-slate-100 text-slate-900': variant === 'default',
          'border-green-200 bg-green-50 text-green-700': variant === 'success',
          'border-yellow-200 bg-yellow-50 text-yellow-700': variant === 'warning',
          'text-slate-900 border-slate-200': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };

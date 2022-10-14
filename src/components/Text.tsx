import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { Children, ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg'; /* opcional escolher o sizer */
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) { /* quando não escolher o size, o padrão é md */
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp
            className={clsx(
                'text-gray-300 font-sans',
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg',
                }
            )}
        >
            {children}
        </Comp  >
    )
}
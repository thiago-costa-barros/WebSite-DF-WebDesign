import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { Children, ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg'; /* opcional escolher o sizer */
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) { /* quando não escolher o size, o padrão é md */
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp
            className={clsx(
                'text-gray-300 font-bold font-sans',
                {
                    'text-lg': size == 'sm',
                    'text-xl': size == 'md',
                    'text-2xl': size == 'lg',
                }
            )}
        >
            {children}
        </Comp  >
    )
}
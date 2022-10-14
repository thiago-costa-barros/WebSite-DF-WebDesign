import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { Children, ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) { /* quando não escolher o size, o padrão é md */
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                'py-3 px-4 bg-gray-900 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 ring-cyan-300 focus:ring-2',
            )}
        >
            {children}
        </Comp  >
    )
}
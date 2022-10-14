import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, Children, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) { /* quando não escolher o size, o padrão é md */
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                'py-3 px-4 bg-cyan-300 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-700 ring-cyan-700 focus:ring-2',
                className,
            )}
            {...props}
        >
            {children}
        </Comp  >
    )
}
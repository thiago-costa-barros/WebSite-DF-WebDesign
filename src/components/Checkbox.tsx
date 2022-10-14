import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';


export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) { /* quando não escolher o size, o padrão é md */
    return (
        <CheckboxPrimitive.Root className='h-6 w-6 p-[2px] bg-gray-300 rounded hover:bg-cyan-300 ring-cyan-300'>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='w-5 h-5 text-cyan-700' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

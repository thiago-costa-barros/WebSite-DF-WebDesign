import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';


export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps { }

export function Checkbox(props: CheckboxProps) { /* quando não escolher o size, o padrão é md */
    return (
        <CheckboxPrimitive.Root className='h-6 w-6 p-[2px] bg-gray-300 rounded hover:bg-cyan-300 ring-cyan-300'{...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='w-5 h-5 text-darkblue' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

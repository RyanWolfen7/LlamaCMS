import type { QRL} from '@builder.io/qwik';
import { component$, $ } from '@builder.io/qwik';

type DefaultButton = {
    onClick?: QRL<() => void>,
    label: string,
    classOveride?: string
}

export const DefaultButton = component$(
    ({
        onClick = $(() => null),
        classOveride = "",
        label
    }: DefaultButton) => {
    return (
        <button 
            onClick$={onClick}
            class={`
                text-center 
                hover:bg-white 
                hover:text-black 
                cursor-pointer
                ${classOveride}
            `}
        > 
            {label}
        </button>
    )
})

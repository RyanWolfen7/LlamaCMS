import { component$, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

type PostalCardProps = { title: string, slug: string }

export const PortalCard = component$(
    ({ 
        title,
        slug 
    }: PostalCardProps) => {
    const nav = useNavigate()
    const optionRoute: string = `./${slug}/dashboard`
    const handleClick = $(() => nav(optionRoute))

    return (
        <button onClick$={handleClick} class="text-center hover:bg-white hover:text-black cursor-pointer">
            <h3> {title} Portal </h3>
        </button>
    )
})

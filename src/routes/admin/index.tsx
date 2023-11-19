import { component$, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

type PostalCardProps = { option: string }

export default component$(() => {
    const options: string[] = ['Users', 'Pages', 'Design', 'Marketing', 'Security', 'Data', 'Settings']
    return (
        <div>
            <div>
                {options.map(item => <PortalCard option={item} key={item}/>)}
            </div>
            <div>
                <h1> Welcome to the admin portal </h1>
            </div>
        </div>
    )
});

export const PortalCard = component$(
    ({ option }: PostalCardProps) => {
    const nav = useNavigate()
    const optionRoute: string = `./${option.toLowerCase()}/dashboard`
    const handleClick = $(() => nav(optionRoute))

    return (
        <div onClick$={handleClick}>
            <h3> {option} Portal </h3>
        </div>
    )
})

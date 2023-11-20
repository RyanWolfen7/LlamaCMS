import { component$, $ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { SideNav } from '../../components/navigation/SideNav/SideNav'

type PostalCardProps = { option: string }

export default component$(() => {
    const isAdmin: boolean = true
    const options: string[] = ['Users', 'Pages', 'Design', 'Marketing', 'Security', 'Data', 'Settings']
    return (
        <div class="grid grid-cols-6">
            <SideNav> 
                {options.map(item => <PortalCard option={item} key={item}/>)} 
            </SideNav>
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
        <div onClick$={handleClick} class="text-center hover:bg-white hover:text-black cursor-pointer">
            <h3> {option} Portal </h3>
        </div>
    )
})

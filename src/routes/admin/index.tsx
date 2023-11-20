import { component$ } from '@builder.io/qwik';
import { SideNav } from '~/components/navigation/SideNav/SideNav'
import { DefaultButton } from '~/components/buttons/DefaultButton';
import { PortalCard } from '~/components/buttons/PortalCard';
import ADMIN_SCHEMA from '~/utils/schema/ADMIN.json';
import type { AdminSchemaPortal } from '~/types/schema/ADMIN';

export default component$(() => {
    const isAdmin: boolean = true
    const options: AdminSchemaPortal[] = ADMIN_SCHEMA.portals
    return (
        <div class="grid grid-cols-6">
            <SideNav> 
                {isAdmin 
                    && <DefaultButton 
                            classOveride="place-self-end self-start" 
                            label="edit"
                        />
                }
                {options.map(item => 
                    <PortalCard 
                        key={`admin-portal-button-${item.slug}`}
                        title={item.title} 
                        slug={item.slug} 
                    />
                )} 
            </SideNav>
            <div>
                <h1> Welcome to the admin portal </h1>
            </div>
        </div>
    )
});

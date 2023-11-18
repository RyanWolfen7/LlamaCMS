import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = useLocation();
    return (
        <div>
            <h1> Welcome to the {loc.params.portals} dashboard </h1>
        </div>
    )
});

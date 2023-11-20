import { component$, Slot } from "@builder.io/qwik";

export const SideNav = component$(() => {

    return (
        <div class="bg-slate-300 text-white p-3 h-screen justify-items-center">
            <Slot/>
        </div>
    )
})

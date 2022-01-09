<template>
    <header class="absolute w-full">
        <div class="container py-7 px-3 flex flex-row justify-between items-center">
            <h3 class="logo text-3xl font-thin text-white tracking-tighter">Gesture Theme</h3>
            <nav>
                <ul class="flex flex-row text-white">
                    <li v-for="(item, i) in menu" :key="i">
                        <router-link :to="item.to" class="px-3 text-lg font-medium">{{
                            item.name
                        }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            menu: [
                { name: "Home", to: "/" },
                { name: "Services", to: "/services" },
                { name: "Projects", to: "/projects" },
                { name: "About Us", to: "/about-us" },
                { name: "Contact", to: "/contact" },
            ],
        };
    },
};
</script>

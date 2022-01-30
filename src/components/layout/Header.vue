<template>
    <header class="absolute w-full z-10 flex justify-center h-24" ref="header">
        <div class="container flex flex-row justify-between items-center">
            <router-link to="/">
                <h3 class="font-light text-2xl">Gesture</h3>
            </router-link>

            <nav
                class="lg:block transition-all"
                :class="{ block: mobileNavOpen, hidden: !mobileNavOpen }"
            >
                <ul
                    class="flex flex-col justify-center items-center lg:flex-row absolute lg:relative top-0 left-0 backdrop-filter backdrop-blur-md lg:backdrop-blur-none bg-opacity-10 w-screen lg:w-auto h-screen lg:h-auto text-white"
                >
                    <li v-for="(item, i) in menu" :key="i" class="py-6 lg:py-0">
                        <router-link :to="item.to" class="px-3 lg:text-base font-light text-4xl">{{
                            item.name
                        }}</router-link>
                    </li>
                </ul>
            </nav>

            <div class="block lg:hidden">
                <button
                    class="text-white w-10 h-10 relative focus:outline-none"
                    @click="mobileNavOpen = !mobileNavOpen"
                >
                    <span class="sr-only">Open main menu</span>
                    <div
                        class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <span
                            aria-hidden="true"
                            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                            :class="{
                                'rotate-45': mobileNavOpen,
                                ' -translate-y-1.5': !mobileNavOpen,
                            }"
                        ></span>
                        <span
                            aria-hidden="true"
                            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                            :class="{ 'opacity-0': mobileNavOpen }"
                        ></span>
                        <span
                            aria-hidden="true"
                            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                            :class="{
                                '-rotate-45': mobileNavOpen,
                                ' translate-y-1.5': !mobileNavOpen,
                            }"
                        ></span>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            mobileNavOpen: false,
            menu: [
                { name: "Services", to: "/services" },
                { name: "Projects", to: "/projects" },
                { name: "About Us", to: "/about-us" },
                { name: "Contact", to: "/contact" },
            ],
        };
    },
    mounted() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: window.body,
                start: "top",
                end: "+=500",
                scrub: 0.7,
            },
        });

        tl.to(this.$refs.header, {
            autoAlpha: 0,
        });
        tl.to(this.$refs.header, {
            position: "fixed",
            height: 60,
        });
        tl.to(this.$refs.header, {
            autoAlpha: 1,
            webkitFilter: "blur(20px)",
            backdropFilter: "blur(10px)",
        });
        tl.to(this.$refs.header, {
            webkitFilter: "blur(0px)",
            duration: 2,
        });
    },
};
</script>

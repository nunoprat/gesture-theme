<template>
    <div class="container bg-gray-100 px-32 py-32">
        <HeroSection title="Hello World!"></HeroSection>
    </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
export default {
    name: "App",
    components: {
        HeroSection,
    },
};
</script>

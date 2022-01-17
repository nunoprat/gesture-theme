<template>
    <WebglBackground />
    <HeroSection />
    <ResumeSection />
</template>

<script>
import HeroSection from "@/components/sections/HeroSection.vue";
import ResumeSection from "@/components/sections/ResumeSection.vue";
import WebglBackground from "@/components/WebglBackground.vue";
export default {
    name: "Home",
    components: {
        ResumeSection,
        HeroSection,
        WebglBackground,
    },
};
</script>

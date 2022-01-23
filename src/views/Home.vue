<template>
    <HeroSection />
    <ResumeSection />
    <ResumeImageSection />
    <ServiceTopicsSection />
</template>

<script>
import HeroSection from "@/components/sections/HeroSection.vue";
import ResumeSection from "@/components/sections/ResumeSection.vue";
import ResumeImageSection from "@/components/sections/ResumeImageSection.vue";
import ServiceTopicsSection from "@/components/sections/ServiceTopicsSection.vue";
export default {
    name: "Home",
    components: {
        HeroSection,
        ResumeSection,
        ResumeImageSection,
        ServiceTopicsSection,
    },
};
</script>

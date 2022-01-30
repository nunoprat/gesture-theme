<template>
    <HeroSection />
    <ResumeSection />
    <ResumeImageSection />
    <ServicesSection />
    <ServicesTwoSection />
</template>

<script>
import HeroSection from "@/components/sections/HeroSection.vue";
import ResumeSection from "@/components/sections/ResumeSection.vue";
import ResumeImageSection from "@/components/sections/ResumeImageSection.vue";
import ServicesTwoSection from "@/components/sections/services/ServicesTwoSection.vue";
import ServicesSection from "@/components/sections/services/ServicesSection.vue";
export default {
    name: "Home",
    components: {
        HeroSection,
        ResumeSection,
        ResumeImageSection,
        ServicesTwoSection,
        ServicesSection,
    },
};
</script>

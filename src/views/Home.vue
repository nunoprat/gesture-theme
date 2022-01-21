<template>
  <ResumeSection />
  <ResumeImageSection />
  <ServiceTopicsSection />
</template>

<script>
import ResumeSection from "@/components/sections/ResumeSection.vue";
import ResumeImageSection from "@/components/sections/ResumeImageSection.vue";
import ServiceTopicsSection from "@/components/sections/ServiceTopicsSection.vue";
export default {
  name: "Home",
  components: {
    ResumeSection,
    ResumeImageSection,
    ServiceTopicsSection,
  },
};
</script>

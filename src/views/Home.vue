<template>
  <ResumeSection />
  <ResumeImageSection />
</template>

<script>
import ResumeSection from "@/components/sections/ResumeSection.vue";
import ResumeImageSection from "@/components/sections/ResumeImageSection.vue";
export default {
  name: "Home",
  components: {
    ResumeSection,
    ResumeImageSection,
  },
};
</script>

<template>
  <div class="container bg-gray-100 px-32 py-32">
    <HeroSection title="Hello World!"></HeroSection>
    <div class="grid grid-cols-2 gap-9">
      <MiniCard v-for="(item, i) in 6" :key="i" />
    </div>
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import MiniCard from "./components/MiniCard.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    MiniCard,
  },
};
</script>

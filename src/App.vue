<template>
    <Header />
    <div class="page-wrapper bg-background pt-28">
        <router-view />
    </div>
    <Footer />
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
};
</script>

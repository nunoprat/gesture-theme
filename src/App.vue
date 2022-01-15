<template>
    <Header />
    <div class="page-wrapper bg-gray-100">
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

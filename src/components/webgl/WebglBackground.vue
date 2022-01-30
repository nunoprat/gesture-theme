<template>
    <div class="fixed left-0 top-0 w-screen h-screen" style="z-index: -1" ref="container"></div>
</template>
<script>
import PlasmaBlob from "@/assets/scripts/plasma-blob.js";

export default {
    mounted() {
        PlasmaBlob(this.$refs.container);
    },
};
</script>

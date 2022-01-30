<template>
    <section :id="name" class="section" :class="`section-${name}`">
        <slot />
    </section>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

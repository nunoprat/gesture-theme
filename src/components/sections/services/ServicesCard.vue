<template>
    <div class="card backdrop-blur-lg bg-white bg-opacity-5 p-10 rounded-xl h-60">
        <h5 class="text-lg text-white font-semibold">Idea & Concept</h5>
        <p class="text-sm text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, itaque voluptatibus ex
            expedita pariatur...
        </p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

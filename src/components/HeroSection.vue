<template>
    <div>
        <p>{{ title }}</p>

        <ul>
            <li>Tailwind Flexbox</li>
            <li>Html best practices - section, articles, headings(h1,h2) hierarchy</li>
            <li>Tailwind responsiveness (https://tailwindcss.com/docs/responsive-design)</li>
            <li>Vue <code>v-for</code> loops</li>
            <li>Vue Components</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["title"],
};
</script>

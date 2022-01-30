<template>
    <a class="btn" :class="variant" :href="href" ref="button">Buy Theme</a>
</template>
<script>
import gsap from "gsap";
export default {
    props: {
        variant: {
            default: "primary",
            type: String,
        },

        href: {
            type: String,
            default: "#",
        },
    },
    mounted() {
        document.addEventListener("mousemove", this.mouseNear);
    },
    methods: {
        mouseNear(e) {
            const el = this.$refs.button;
            const elBoundingClientRect = el.getBoundingClientRect();
            const threshold = 200;

            el.position = {
                top: elBoundingClientRect.y - threshold,
                bottom: elBoundingClientRect.y + elBoundingClientRect.height + threshold,
                left: elBoundingClientRect.x - threshold,
                right: elBoundingClientRect.x + elBoundingClientRect.width + threshold,
            };

            if (
                e.clientY > el.position.top &&
                e.clientY < el.position.bottom &&
                e.clientX > el.position.left &&
                e.clientX < el.position.right
            ) {
                let deg = gsap.utils.interpolate(
                    "90deg",
                    "160deg",
                    gsap.utils.normalize(el.position.top, el.position.bottom, e.clientY)
                );

                let perc = gsap.utils.interpolate(
                    "10%",
                    "50%",
                    gsap.utils.normalize(el.position.left, el.position.right, e.clientX)
                );

                gsap.to(el, 1, {
                    backgroundImage: `linear-gradient(${deg}, #290329 ${perc}, #520952 83.07%)`,
                });
            }
        },
    },
};
</script>

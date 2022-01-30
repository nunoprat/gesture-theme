<template>
    <section class="section">
        <div class="container flex flex-col md:flex-row items-center md:py-20 min-h-screen">
            <div class="flex">
                <img
                    src="@/assets/brooke.png"
                    alt="hapiness"
                    class="w-screen rounded-xl object-cover lg:"
                />
            </div>

            <div class="pt-8 md:pt-0 md:pl-20 lg:pl-40">
                <h6 class="up-heading">Resume</h6>
                <h2 class="heading-1">Completely revolutionize pandemic strategic theme</h2>
                <p class="paragraph-base mt-8">
                    We help brands be their most inspiring selves. Own their quirks - their edge -
                    their culture. Help them be confidently attractive. At home, and abroad.
                </p>
                <AppButton class="mt-10">Know More</AppButton>
            </div>
        </div>
    </section>
</template>
<script>
import AppButton from "../ui/AppButton.vue";

export default {
    components: {
        AppButton,
    },
};
</script>

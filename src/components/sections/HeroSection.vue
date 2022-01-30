<template>
    <section class="section">
        <div class="container flex flex-col justify-center min-h-screen">
            <div class="ml-32">
                <div class="relative">
                    <h1 class="display-1">Awesome</h1>
                    <h1 class="display-1">Webgl</h1>
                    <h1 class="display-1">Backgrounds</h1>
                </div>
                <AppButton class="mt-10">Buy Theme</AppButton>
            </div>
        </div>
    </section>
</template>
<script>
import AppButton from "@/components/ui/AppButton";
export default {
    components: {
        AppButton,
    },
};
</script>

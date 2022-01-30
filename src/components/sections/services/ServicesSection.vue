<template>
    <app-section name="services">
        <div class="container py-32">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="w-full lg:w-5/12">
                    <h6 class="up-heading">Our Process</h6>
                    <h3 class="heading-1">The Best Solutions For You</h3>
                    <p class="paragraph-base mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam
                        doloribus nulla cupiditate maxime error reprehenderit.
                    </p>
                    <app-button class="mt-10">Our Services</app-button>
                </div>
                <div class="w-full lg:w-7/12 pl-0 lg:pl-20">
                    <div class="flex">
                        <div class="w-1/2">
                            <ServicesCard class="mx-3 my-6" />
                            <ServicesCard class="mx-3 my-6" />
                        </div>
                        <div class="w-1/2 pt-10">
                            <ServicesCard class="mx-3 my-6" />
                            <ServicesCard class="mx-3 my-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-section>
</template>
<script>
import AppButton from "../../ui/AppButton.vue";
import AppSection from "../../ui/AppSection.vue";
import ServicesCard from "./ServicesCard.vue";
export default {
    components: { AppSection, AppButton, ServicesCard },
};
</script>

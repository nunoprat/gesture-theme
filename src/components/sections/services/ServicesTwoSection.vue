<template>
    <section class="section">
        <div class="container py-44 min-h-screen">
            <h6 class="up-heading">Services</h6>
            <h2 class="heading-1">Our Simple AF Process</h2>
            <p class="paragraph-base mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat ab quasi
                sint, repudiandae, asperiores magni blanditiis temporibus quas ad nihil repellat
                quos, provident voluptatem enim voluptatibus vel esse laudantium!
            </p>
            <div class="grid grid-cols-4 gap-x-5 gap-y-5 mt-20">
                <div
                    v-for="(v, i) of 4"
                    :key="i"
                    class="bg-secondary bg-opacity-30 px-6 py-10 rounded-xl"
                >
                    <img src="@/assets/Vector.svg" alt="Design" class="mb-5" />
                    <p class="paragraph-xs text-white text-opacity-70">Seamlessly architect</p>
                </div>
            </div>
        </div>
    </section>
</template>

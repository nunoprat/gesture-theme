<template>
    <section class="relative bg-black">
        <div id="plasma-bg" class="min-h-half-screen w-full"></div>
        <div class="absolute top-0 w-full min-h-full flex flex-col items-center justify-center">
            <dt class="text-sm text-gray-300 font-bold uppercase text-center mb-2">
                Gesture theme
            </dt>
            <h1 class="text-6xl max-w-4xl font-black leading-tight text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
        </div>
    </section>
</template>
<script>
import * as THREE from "three";

export default {
    props: ["title"],
    mounted() {
        var container;
        var camera, scene, renderer;
        var uniforms;
        var startTime;

        init();
        animate();

        function init() {
            container = document.getElementById("plasma-bg");
            startTime = Date.now();
            camera = new THREE.Camera();
            camera.position.z = 1;

            scene = new THREE.Scene();
            var geometry = new THREE.PlaneBufferGeometry(2, 2);
            uniforms = {
                iGlobalTime: { type: "f", value: 1.0 },
                iResolution: { type: "v1", value: new THREE.Vector2() },
            };

            var material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vertex,
                fragmentShader: fragment,
            });

            var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            renderer = new THREE.WebGLRenderer();
            container.appendChild(renderer.domElement);
            onWindowResize();
            window.addEventListener("resize", onWindowResize, false);
        }

        function onWindowResize() {
            uniforms.iResolution.value.x = container.offsetWidth;
            uniforms.iResolution.value.y = container.offsetHeight;
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            var currentTime = Date.now();
            uniforms.iGlobalTime.value = (currentTime - startTime) * 0.0001;
            renderer.render(scene, camera);
        }
    },
};
</script>
<style scoped></style>

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

            const vertex = `
                varying vec2 vUv; 
                void main() {
                    vUv = uv;

                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
                    gl_Position = projectionMatrix * mvPosition;
                }

            `;
            const fragment = `
                uniform float iGlobalTime;

                uniform vec3      iResolution;           // viewport resolution (in pixels)
                uniform float     iTime;                 // shader playback time (in seconds)
                uniform float     iTimeDelta;            // render time (in seconds)
                uniform int       iFrame;                // shader playback frame
                uniform vec4      iDate;                 // (year, month, day, time in seconds)
                uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

                varying vec2 vUv; 
                
                const int ps = 0; // play with values 0..10

                void main(void)
                {


                    float x = gl_FragCoord.x / iResolution.x * 640.;
                    float y = gl_FragCoord.y / iResolution.y * 480.;
                    
                        if (ps > 0)
                        {
                        x = float(int(x / float(ps)) * ps);
                        y = float(int(y / float(ps)) * ps);
                        }
                        
                    float mov0 = x+y+sin(iGlobalTime)*10.+sin(x/90.)*70.+iGlobalTime*2.;
                    float mov1 = (mov0 / 5. + sin(mov0 / 30.))/ 10. + iGlobalTime * 3.;
                    float mov2 = mov1 + sin(mov1)*5. + iGlobalTime*1.0;
                    float cl1 = sin(sin(mov1/4. + iGlobalTime)+mov1);
                    float c1 = cl1 +mov2/2.-mov1-mov2+iGlobalTime;
                    float c2 = sin(c1+sin(mov0/100.+iGlobalTime)+sin(y/57.+iGlobalTime/50.)+sin((x+y)/200.)*2.);
                    float c3 = abs(sin(c2+cos((mov1+mov2+c2) / 10.)+cos((mov2) / 10.)+sin(x/80.)));
                    
                    float dc = float(16-ps);
                        
                        if (ps > 0)
                        {
                            cl1 = float(int(cl1*dc))/dc;
                            c2 = float(int(c2*dc))/dc;
                            c3 = float(int(c3*dc))/dc;
                        }
                        
                    gl_FragColor = vec4( cl1,c2,c3,1.0);

                   
                }
            `;

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

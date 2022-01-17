import * as THREE from "three";
// import fragmentShader from "../shaders/frag.glsl.js";
// import vertexShader from "../shaders/vert.glsl.js";

export default function (container) {
    let camera, scene, renderer;
    // let uniforms;
    // let startTime;

    init();
    animate();

    function init() {
        // startTime = Date.now();
        // camera = new THREE.Camera();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 2, 0);
        camera.position.z = 0;
        scene = new THREE.Scene();

        // var geometry = new THREE.PlaneBufferGeometry(10, 10);
        // uniforms = {
        //     iGlobalTime: { type: "f", value: 1.0 },
        //     iResolution: { type: "v1", value: new THREE.Vector2() },
        // };

        // var material = new THREE.ShaderMaterial({
        //     uniforms: uniforms,
        //     vertexShader: vertexShader[0],
        //     fragmentShader: fragmentShader[0],
        // });

        // var mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0); // the default

        container.appendChild(renderer.domElement);
        onWindowResize();
        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        // uniforms.iResolution.value.x = container.offsetWidth;
        // uniforms.iResolution.value.y = container.offsetHeight;
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        // var currentTime = Date.now();
        // uniforms.iGlobalTime.value = (currentTime - startTime) * 0.001;
        renderer.render(scene, camera);
    }
}

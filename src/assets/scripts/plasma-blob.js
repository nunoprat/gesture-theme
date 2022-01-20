import * as THREE from "three";
import fragmentShader from "../shaders/frag.glsl.js";
import vertexShader from "../shaders/vert.glsl.js";

export default function (container) {
    let camera, scene, renderer, mesh;
    let uniforms;
    let clock = new THREE.Clock();

    init();
    animate();

    function init() {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;

        let fovSize = {};
        let vFOV = THREE.MathUtils.degToRad(camera.fov);
        fovSize.height = 2 * Math.tan(vFOV / 2) * camera.position.z + 3;
        fovSize.width = fovSize.height * camera.aspect;

        scene = new THREE.Scene();

        let geometry = new THREE.SphereGeometry(1, 102, 102);

        uniforms = {
            uTime: { value: 0 },
        };

        var material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader[0],
            fragmentShader: fragmentShader[0],
        });

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = -5;
        mesh.scale.x = 1.5;
        mesh.scale.y = 0.8;

        scene.add(mesh);

        // const geometry = new THREE.BoxGeometry(500, 500, 500);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0); // the default
        container.appendChild(renderer.domElement);
        onWindowResize();
        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
    function animate() {
        requestAnimationFrame(animate);
        render();
        uniforms.uTime.value = clock.getElapsedTime();

        mesh.rotation.y += 0.01;
    }

    function render() {
        renderer.render(scene, camera);
    }
}

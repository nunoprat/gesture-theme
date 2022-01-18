import * as THREE from "three";
import fragmentShader from "../shaders/frag.glsl.js";
import vertexShader from "../shaders/vert.glsl.js";

export default function (container) {
    let camera, scene, renderer, mesh;
    let uniforms;
    let startTime;
    let clock = new THREE.Clock();

    init();
    animate();

    function init() {
        startTime = Date.now();
        // camera = new THREE.Camera();
        camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            0,
            100
        );        
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 10;

        
        let fovSize = {}
        let vFOV = THREE.MathUtils.degToRad(camera.fov);
        fovSize.height = 2 * Math.tan(vFOV / 2) * camera.position.z + 3;
        fovSize.width = fovSize.height * camera.aspect;

        scene = new THREE.Scene();

        var geometry = new THREE.PlaneBufferGeometry(50, 
            50);
        geometry = new THREE.SphereGeometry(1, 102, 102);

        uniforms = {
            iGlobalTime: { type: "f", value: 1.0 },
            uTime: { value: 0 },

             
            iResolution: { type: "v1", value: new THREE.Vector2() },
        };

        var material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader[0],
            fragmentShader: fragmentShader[0],
            
        });

        // material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

         mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = 7;
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
        uniforms.iResolution.value.x = 1000;
        uniforms.iResolution.value.y = 1000;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
    function animate() {
        requestAnimationFrame(animate);
        render();
        uniforms.uTime.value = clock.getElapsedTime()
        mesh.rotation.y += 0.01;
    }

    function render() {
        var currentTime = Date.now();
        uniforms.iGlobalTime.value = (currentTime - startTime) * 0.001;

        renderer.render(scene, camera);
    }
}

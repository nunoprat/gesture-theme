const glsl = (x) => x;

export default glsl`
uniform float uTime;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vColor;

    void main() {
        vec3 light = vec3(0.0, 0.0, 0.0);
        vec3 skyColor = vec3(0.0, 0.0, 0.0);
        vec3 colorBottom = vec3(0.0,0.0,0.0);

        float intensity = pow(1.0 - dot(vNormal, vec3(0,0,1.0)), 1.0);

        vec3 lightDirection = normalize(vec3(1.,-1.0,-0.2));
        light = mix(skyColor, colorBottom, dot(lightDirection, vNormal)) ;

        gl_FragColor = vec4(lightDirection, 1.0);
    }
`;

uniform float Power;
#define rand1(p) fract(sin(p* 78.233)* 43758.5453) 


float variation(vec2 v1, vec2 v2, float strength, float speed) {
	return sin(
        dot(normalize(v1), normalize(v2)) * strength + iGlobalTime * speed
    ) /40.0;
}


vec3 paintCircle (vec2 uv, vec2 center, float rad, float width) {
    
    vec2 diff = center-uv;
    float len = length(diff);

     len -= variation(diff, vec2(1.0, 1.2), 2.0, 0.5);
     len += variation(diff, vec2(3.0, 2.2), 3.0, 0.5);
     
    
    float circle = smoothstep(rad+width, rad, len) ;
    return vec3(circle);
}


void main( void )
{
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    uv.x *= 1.1;
    uv.x -= 0.25;
    
    vec3 color;
    float radius = 0.10;
    vec2 center = vec2(0.5);
    
     
    color = paintCircle(uv, center, radius, 0.3);
    //paint color circle
    
    //color with gradient
    vec2 v = uv;


    color *= vec3(0.6, 0.6, 0.45);
    //paint white circle
    color -= paintCircle(uv, center, radius, 0.140);
        

	gl_FragColor = vec4(color, 1.0);
}

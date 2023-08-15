precision mediump float;

uniform float uTime;

varying vec2 vUv;

void main(){
    vec2 uv=vUv;
    
    for(float i=1.;i<10.;i++){
        uv.x+=.2/i*cos(i*2.5*uv.y+uTime);
        uv.y+=.2/i*cos(i*1.5*uv.x+uTime);
    }
    vec3 color=mix(vec3(0.),vec3(.1216,.302,0.),uv.y*uv.x);
    gl_FragColor=vec4(color/abs(sin(uTime-uv.y-uv.x)),1.);
}
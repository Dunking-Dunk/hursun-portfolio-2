uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float uTime;
uniform float uAlpha;
attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying float vAlpha;

void main(){
    vec4 modelPosition=modelMatrix*vec4(position,1.);
    
    modelPosition.z+=sin(position.x*5.-uTime)*.2;
    modelPosition.z+=sin(position.y*5.-uTime)*.2;
    
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectionPosition=projectionMatrix*viewPosition;
    
    gl_Position=projectionPosition*uAlpha;
    vUv=uv;
    vAlpha=uAlpha;
}
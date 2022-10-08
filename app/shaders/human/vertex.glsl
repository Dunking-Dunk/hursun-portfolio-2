uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;

void main(){
    gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);
    
    vUv=uv;
}
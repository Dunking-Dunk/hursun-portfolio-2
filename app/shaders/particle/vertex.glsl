uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSize;

attribute vec3 position;

void main(){
    vec4 modelPosition=modelMatrix*vec4(position,1.);
    
    modelPosition.y+=sin(modelPosition.y*20.-uTime)*1.;
    modelPosition.x+=abs(sin(modelPosition.x+uTime)*1.);
    
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectionPosition=projectionMatrix*viewPosition;
    
    gl_Position=projectionPosition;
    
    gl_PointSize=uSize;
    gl_PointSize*=(1./-viewPosition.z);
}
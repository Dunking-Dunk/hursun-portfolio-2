precision mediump float;

uniform sampler2D uTexture;

varying float vAlpha;
varying vec2 vUv;

void main(){
    vec4 textureColor=texture2D(uTexture,vUv);
    gl_FragColor=textureColor*vAlpha;
}
import * as THREE from 'three'
import each from 'lodash/each.js'
import GSAP from 'gsap'
import vertexShader from '../../../shaders/plane/vertex.glsl'
import fragmentShader from '../../../shaders/plane/fragment.glsl'

export default class Media {
    constructor({ element, scene, textureLoader, geometry, id, index }) {
        this.geometry = geometry
        this.element = element
        this.scene = scene
        this.textureLoader = textureLoader
        this.id = id
        this.index = index
        this.createMaterial()
        this.createMesh()
    }

    createMaterial() {
        this.texture = this.textureLoader.load(this.element.getAttribute('data-src'))
        this.material = new THREE.RawShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTexture: { value: this.texture },
                uTime: { value: 0 },
                uAlpha: { value: 1 },
            },
        })
    }

    show() {
        GSAP.to(this.mesh.position, {
            z: 5,
            ease: 'power3.out',
        })
        GSAP.to(this.mesh.scale, {
            x: 2,
            y: 2,
            z: 2,
        })
    }

    hide() {
        GSAP.to(this.mesh.position, {
            z: this.index,
            ease: 'power3.out',
        })
        GSAP.to(this.mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
        })
    }

    createMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(1, 0, this.index)
        this.scene.add(this.mesh)
    }

    onResize(size) {}

    update(elapsedTime) {
        this.material.uniforms.uTime.value = elapsedTime
    }
}

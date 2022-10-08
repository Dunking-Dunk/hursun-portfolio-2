import * as THREE from 'three'
import GSAP from 'gsap'

import vertexShader from '../../../shaders/human/vertex.glsl'
import fragmentShader from '../../../shaders/human/fragment.glsl'

import vertexShaderParticle from '../../../shaders/particle/vertex.glsl'
import fragmentShaderParticle from '../../../shaders/particle/fragment.glsl'

export default class Home {
    constructor({ scene, gltfLoader, camera, renderer }) {
        this.scene = scene
        this.gltfLoader = gltfLoader
        this.camera = camera
        this.renderer = renderer

        this.uniforms = {
            time: { value: 0.0 },
            speed: { value: 18.0 },
            charSize: { value: { x: 1.0, y: 1.0 } },
            charResolution: { value: 5.5 },
            color: { value: new THREE.Color('red') },
            resolution: { value: { x: 1.0, y: 1.0 } },
        }

        this.scroll = {
            target: 0,
            current: 0,
            limit: document.querySelector('.home__wrapper').clientHeight,
        }

        this.group = new THREE.Group()
        this.scene.add(this.group)
        this.createObject()
        this.createParticle()
    }

    updateAllMaterial() {
        this.scene.traverse((child) => {
            if (
                child instanceof THREE.Mesh &&
                child.material instanceof THREE.MeshStandardMaterial
            ) {
                child.material.needsUpdate = true
            }
        })
    }

    createObject() {
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
        this.cube.position.set(0, -18, 0)
        this.material = new THREE.RawShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: this.uniforms,
        })
        this.gltfLoader.load('models/human/scene.gltf', (gltf) => {
            this.model = gltf.scene

            this.model.children[0].children[0].children.forEach((child) => {
                child.material = this.material
            })
            this.model.position.y = -16
            this.group.add(this.model)
            this.updateAllMaterial()
        })
    }

    createParticle() {
        const count = 10000
        const radius = 100
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            positions[i3] = (Math.random() - 0.5) * radius
            positions[i3 + 1] = Math.random() * radius
            positions[i3 + 2] = (Math.random() - 0.5) * radius
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        this.particleMaterial = new THREE.RawShaderMaterial({
            fragmentShader: fragmentShaderParticle,
            vertexShader: vertexShaderParticle,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uTime: { value: 0 },
            },
        })

        this.particle = new THREE.Points(geometry, this.particleMaterial)
        this.particle.position.y = -35
        this.group.add(this.particle)
    }

    onScroll({ pixelY }) {
        this.scroll.target += pixelY
    }

    update(elapsedTime) {
        this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)
        if (this.scroll.target < 1) {
            this.scroll.target = 0
        }
        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.01)

        if (this.head) this.head.rotation.y = elapsedTime
        if (this.particleMaterial) this.particleMaterial.uniforms.uTime.value = elapsedTime

        if (this.scroll.current < 4500) {
            this.camera.rotation.x = this.scroll.current * 0.0003
            this.camera.rotation.y = this.scroll.current * 0.01
            this.camera.position.z = Math.cos(this.scroll.current * 0.01) * 5
            this.camera.position.y = -this.scroll.current * 0.002
            this.camera.position.x = Math.sin(this.scroll.current * 0.01) * 5
            document.querySelector('.home__end').classList.remove('active')
        } else {
            GSAP.to(this.camera.position, {
                x: 0,
                y: -6,
                z: 15,
                duration: 6,
                ease: 'expo.out',
            })
            GSAP.to(this.camera.rotation, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
            })

            document.querySelector('.home__end').classList.add('active')
        }

        this.uniforms.time.value = elapsedTime
    }

    destroy() {
        this.scene.remove(this.group)
    }
}

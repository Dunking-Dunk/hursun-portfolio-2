import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import vertexShader from './../../shaders/background/vertex.glsl'
import fragmentShader from './../../shaders/background/fragment.glsl'
import Home from './home/index.js'
import Skills from './skills/index.js'
import Works from './works/index.js'

export default class Three {
    constructor() {
        this.canvas = document.querySelector('.webgl')

        this.size = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        this.previousTime = 0

        this.mouse = {
            x: 0,
            y: 0,
        }

        this.createScene()
        this.createLoadingManger()
        this.createLoaders()
        this.createCamera()
        // this.createControls()
        this.createClock()
        this.createLight()
        this.createBackground()
        this.createRenderer()
    }

    createScene() {
        this.scene = new THREE.Scene()
    }

    createLoadingManger() {
        this.manager = new THREE.LoadingManager()
        this.manager.onStart = () => {}
    }

    createLoaders() {
        this.gltfLoader = new GLTFLoader(this.manager)
        this.textureLoader = new THREE.TextureLoader(this.manager)
    }

    createHome() {
        this.home = new Home({
            scene: this.scene,
            gltfLoader: this.gltfLoader,
            camera: this.camera,
            renderer: this.renderer,
        })
    }

    destroyHome() {
        if (!this.home) return
        this.home.destroy()
        this.home = null
    }

    createSkills() {
        this.skills = new Skills({ scene: this.scene, camera: this.camera, size: this.size })
    }

    destroySkills() {
        if (!this.skills) return

        this.skills.destroy()
        this.skills = null
    }

    createWorks() {
        this.works = new Works({
            scene: this.scene,
            camera: this.camera,
            textureLoader: this.textureLoader,
        })
    }

    destroyWorks() {
        if (!this.works) return

        this.works.destroy()
        this.works = null
    }

    onChange(template) {
        if (template === 'home') {
            this.createHome()
        } else if (this.home) {
            this.destroyHome()
        }
        if (template === 'skills') {
            this.createSkills()
        } else if (this.skills) {
            console.log('skill')
            this.destroySkills()
        }

        if (template === 'works') {
            this.createWorks()
        } else if (this.works) {
            this.destroyWorks()
        }

        this.template = template
    }

    createCamera() {
        this.cameraGroup = new THREE.Group()
        this.scene.add(this.cameraGroup)
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.size.width / this.size.height,
            0.0001,
            1000
        )

        this.cameraGroup.add(this.camera)
    }

    createControls() {
        this.control = new OrbitControls(this.camera, this.canvas)
        this.control.enableDamping = true
    }

    createClock() {
        this.clock = new THREE.Clock()
    }

    createLight() {
        this.light = new THREE.AmbientLight('white', 10)
        this.scene.add(this.light)
    }

    createBackground() {
        this.plane = new THREE.Mesh(
            new THREE.BoxGeometry(700, 500, 500),
            new THREE.RawShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    uTime: { value: 0 },
                },
                side: THREE.DoubleSide,
            })
        )
        this.plane.position.set(0, 0, 100)
        // this.plane.rotation.x = Math.PI
        this.scene.add(this.plane)
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        })
        this.renderer.setSize(this.size.width, this.size.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    }

    onResize() {
        this.size.width = window.innerWidth
        this.size.height = window.innerHeight

        this.camera.aspect = this.size.width / this.size.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.size.width, this.size.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // const fov = this.camera.fov * (Math.PI / 180)
        // const height = 2 * Math.tan(fov / 2) * this.camera.position.z
        // const width = height * this.camera.aspect

        // this.sizes = {
        //     height,
        //     width,
        // }

        // if (this.works.onResize) {
        //     this.works.onResize(this.size)
        // }
    }

    onScroll(e) {
        if (this.home && this.home.onScroll) {
            this.home.onScroll(e)
        }
    }

    onMousemove(e) {
        this.mouse.x = e.clientX / this.size.width - 0.5
        this.mouse.y = -(e.clientY / this.size.height) + 0.5
    }

    update() {
        if (this.control) {
            // console.log(this.control.object.rotation)
            // console.log(this.control.object.position)
            this.control.update()
        }

        const elapsedTime = this.clock.getElapsedTime()
        this.deltaTime = elapsedTime - this.previousTime
        this.previousTime = elapsedTime
        this.cameraGroup.position.x +=
            (this.mouse.x - this.cameraGroup.position.x) * 0.1 * 5 * this.deltaTime
        this.cameraGroup.position.y +=
            (this.mouse.y - this.cameraGroup.position.y) * 0.1 * 5 * this.deltaTime

        this.plane.material.uniforms.uTime.value = elapsedTime

        if (this.home && this.home.update) {
            this.home.update(elapsedTime)
        }

        if (this.skills && this.skills.update) {
            this.skills.update(elapsedTime)
        }

        if (this.works && this.works.update) {
            this.works.update(elapsedTime)
        }

        this.renderer.render(this.scene, this.camera)
    }
}

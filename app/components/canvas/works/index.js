import * as THREE from 'three'
import map from 'lodash/map.js'
import each from 'lodash/each.js'
import Media from './media.js'
import GSAP from 'gsap'

export default class works {
    constructor({ camera, scene, textureLoader }) {
        this.camera = camera
        this.scene = scene
        this.group = new THREE.Group()
        this.scene.add(this.group)
        this.textureLoader = textureLoader
        this.containers = document.querySelectorAll('.work__works__container')

        this.addEventListener()
        this.createGeometry()
        this.createMedia()
        this.cameraPosition()
    }

    cameraPosition() {
        GSAP.to(this.camera.position, {
            x: 0,
            y: 0,
            z: this.medias.length + 1,
            duration: 1,
        })
        GSAP.to(this.camera.rotation, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
        })
    }

    addEventListener() {
        each(this.containers, (element) => {
            element.addEventListener('mousemove', (event) => {
                each(this.medias, (media) => {
                    if (media.id === element.id) {
                        media.show()
                    } else {
                        media.hide()
                    }
                })
            })
            //     element.addEventListener('click', (event) => {
            //         each(this.medias, (media) => {
            //             if (media.id === element.id) {
            //                 media.show()
            //             } else {
            //                 media.hide()
            //             }
            //         })
            //     })
        })
    }

    createGeometry() {
        this.plane = new THREE.PlaneGeometry(1.5, 1, 32, 32)
    }

    createMedia() {
        this.medias = map(
            this.containers,
            (element, index) =>
                new Media({
                    element,
                    scene: this.group,
                    textureLoader: this.textureLoader,
                    geometry: this.plane,
                    id: `works__container-${index + 1}`,
                    index,
                })
        )
    }

    onResize(size) {
        map(this.medias, (media) => media.onResize(size))
    }

    update(elapsedTime) {
        this.camera.position.set(0, 0, this.medias.length + 1)
        this.camera.rotation.set(0, 0, 0)
        if (this.medias && elapsedTime < 2) {
        }

        each(this.medias, (media) => {
            media.update(elapsedTime)
        })
    }

    destroy() {
        this.scene.remove(this.group)
    }
}

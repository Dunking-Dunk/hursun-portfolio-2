import * as THREE from 'three'
import GSAP from 'gsap'
import Component from '../../../classes/Component.js'

import fragmentShader from '../../../shaders/human/fragment.glsl'
import vertexShader from '../../../shaders/human/vertex.glsl'

export default class Skills extends Component {
    constructor({ scene, camera, size }) {
        super({
            element: '.skills',
            elements: {
                point1: '.skills__point-1',
                point2: '.skills__point-2',
                point3: '.skills__point-3',
                point4: '.skills__point-4',
                point5: '.skills__point-5',
                point6: '.skills__point-6',
                point7: '.skills__point-7',
                point8: '.skills__point-8',
                point9: '.skills__point-9',
            },
        })
        this.scene = scene
        this.camera = camera
        this.size = size
        this.group = new THREE.Group()
        this.scene.add(this.group)
        this.time = 0

        this.uniforms = {
            time: { value: 0.0 },
            speed: { value: 12.0 },
            charSize: { value: { x: 1.0, y: 1.0 } },
            charResolution: { value: 10.5 },
            color: { value: new THREE.Color('red') },
            resolution: { value: { x: 1.0, y: 1.0 } },
        }

        this.createLight()
        this.createSphere()
        this.createRaycaster()
        this.cameraPosition()
    }

    cameraPosition() {
        GSAP.to(this.camera.position, {
            x: -2.7495435758348323,
            y: 0.5014894050120012,
            z: 9.363562308090561,
            duration: 1,
        })

        GSAP.to(this.camera.rotation, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
        })

        // GSAP.to(this.camera.position, {
        //     x: -9.447380164695044,
        //     y: -1.400129430276949,
        //     z: 21.486711770163325,
        //     duration: 1,
        // })
        // GSAP.to(this.camera.rotation, {
        //     x: 0.09488243308055379,
        //     y: -0.014478640364552205,
        //     z: 0.00013778570432119639,
        //     duration: 1,
        // })
    }

    createLight() {
        this.light = new THREE.DirectionalLight(0xff0000, 20)
        this.light.position.set(0, 15, 15)
        this.group.add(this.light)
    }

    createSphere() {
        this.material = new THREE.RawShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms: this.uniforms,
        })
        this.sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), this.material)
        this.sphere.position.set(0, 0, 0)
        this.group.add(this.sphere)
    }

    createRaycaster() {
        this.raycaster = new THREE.Raycaster()
        this.positions = [
            {
                position: new THREE.Vector3(4, -1, 5.5),
                element: this.elements.point1,
            },
            {
                position: new THREE.Vector3(-2, -3, -5.5),
                element: this.elements.point2,
            },
            {
                position: new THREE.Vector3(2, -3, 5.5),
                element: this.elements.point3,
            },
            {
                position: new THREE.Vector3(4, -0, -5.5),
                element: this.elements.point4,
            },
            {
                position: new THREE.Vector3(-1, -3, 5.5),
                element: this.elements.point5,
            },
            {
                position: new THREE.Vector3(1, 1, -5.5),
                element: this.elements.point6,
            },
            {
                position: new THREE.Vector3(-5, -1, 5.5),
                element: this.elements.point7,
            },
            {
                position: new THREE.Vector3(-3, -1, -5.5),
                element: this.elements.point8,
            },
            // {
            //     position: new THREE.Vector3(0, 0, 5.5),
            //     element: this.elements.point9,
            // },
        ]
    }

    update(elapsedTime) {
        const deltaTime = elapsedTime - this.time
        this.time = elapsedTime

        this.camera.position.x = Math.sin(elapsedTime * 0.1) * 10
        this.camera.position.z = Math.cos(elapsedTime * 0.1) * 10
        this.camera.position.y = 0
        this.camera.lookAt(this.sphere.position)

        for (let point of this.positions) {
            const screenPosition = point.position.clone()
            screenPosition.project(this.camera)

            this.raycaster.setFromCamera(screenPosition, this.camera)
            const intersects = this.raycaster.intersectObjects(this.scene.children, true)
            if (intersects.length === 0) {
                point.element.classList.add('visible')
            }

            // Intersect found
            else {
                // Get the distance of the intersection and the distance of the point
                const intersectionDistance = intersects[0].distance
                const pointDistance = point.position.distanceTo(this.camera.position)

                // Intersection is close than the point
                if (intersectionDistance < pointDistance) {
                    // Hide
                    point.element.classList.remove('visible')
                }
                // Intersection is further than the point
                else {
                    // Show
                    point.element.classList.add('visible')
                }
            }

            const translateX = screenPosition.x * this.size.width * 0.5
            const translateY = -screenPosition.y * this.size.height * 0.5
            point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
        }

        this.uniforms.time.value = elapsedTime
    }

    destroy() {
        this.scene.remove(this.group)
    }
}

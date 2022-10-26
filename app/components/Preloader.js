import Component from '../classes/Component.js'
import GSAP from 'gsap'
import each from 'lodash/each.js'

export default class Preloader extends Component {
    constructor({ loadingManger }) {
        super({
            element: '.preloader',
            elements: {
                wrapper: '.preloader__wrapper',
                loadingBar: '.preloader__loading__bar',
                loadingPercentage: '.preloader__loading__percentage',
                title: '.preloader__title',
                images: document.querySelectorAll('img'),
                btn: '.preloader__btn',
            },
        })
        this.length = 0
        this.total = 0
        this.manager = loadingManger
        this.createLoader()
        this.addEventListeners()
    }

    async createLoader() {
        this.total = this.elements.images.length
        this.manager.onProgress = () => {
            this.total += 1
            this.length += 1
        }
        this.manager.onLoad = () => {
            this.onAssentLoaded()
        }
        each(this.elements.images, (image) => {
            this.length += 1
            image.onload = this.onAssentLoaded()

            image.src = image.getAttribute('data-src')
        })
    }

    onAssentLoaded() {
        this.percent = this.length / this.total

        this.elements.loadingPercentage.innerHTML = `${Math.round(this.percent * 100)}%`
        this.elements.loadingBar.style.height = `${Math.round(this.percent * 100)}%`
        if (this.percent === 1) {
            this.onLoaded()
        }
    }

    async onLoaded() {
        return new Promise((resolve) => {
            this.animateOut = GSAP.timeline()

            this.animateOut.to(this.elements.title, {
                autoAlpha: 0,
                duration: 1.5,
                ease: 'expo.out',
                stagger: 0.1,
                y: '100%',
            })

            this.animateOut.to(this.elements.loadingPercentage, {
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.out',
                stagger: 0.1,
                y: '100%',
            })

            this.animateOut.to(this.elements.loadingBar, {
                autoAlpha: 0,
                duration: 1,
            })

            this.animateOut.to(this.elements.btn, {
                autoAlpha: 1,
                display: 'flex',
                duration: 1,
            })
        })
    }

    addEventListeners() {
        this.elements.btn.addEventListener('click', () => {
            this.emit('completed')
            this.animateOut.to(this.element, {
                duration: 1,
                autoAlpha: 0,
            })
        })
    }
}

import each from 'lodash/each.js'
import GSAP from 'gsap'
import Prefix from 'prefix'

import AsyncLoad from './AsyncLoad.js'
import AnimationTitle from '../animations/Title.js'
import AnimationParagraph from '../animations/Paragraph.js'
import AnimationHighlight from '../animations/Highlight.js'
import DetectionManager from '../classes/Detection.js'

export default class Page {
    constructor({ element, id, elements }) {
        this.selector = element
        this.selectorChildren = {
            ...elements,
            loadScreen: document.querySelector('.load__screen'),
            loadScreenImg: document.querySelector('.load__screen__img'),
            animationTitles: '[data-animation="title"]',
            animationParagraph: '[data-animation="paragraph"]',
            animationHighlight: '[data-animation="highlight"]',
            preloaders: '[data-src]',
        }
        this.id = id
        this.scroll = {
            current: 0,
            target: 0,
            limit: 0,
        }

        this.mouse = {
            x: 0,
            y: 0,
        }

        this.y = {
            start: 0,
            distance: 0,
            end: 0,
        }

        this.transformPrefix = Prefix('transform')
    }

    create() {
        this.element = document.querySelector(this.selector)
        this.elements = {}

        each(this.selectorChildren, (selector, key) => {
            if (
                selector instanceof window.HTMLElement ||
                selector instanceof window.NodeList ||
                Array.isArray(selector)
            ) {
                this.elements[key] = selector
            } else {
                this.elements[key] = this.element.querySelectorAll(selector)
                if (this.elements[key].length === 0) {
                    this.elements[key] = null
                } else if (this.elements[key].length === 1) {
                    this.elements[key] = this.element.querySelector(selector)
                }
            }
        })
        if (this.elements.wrapper) {
            this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
        }

        this.createAnimation()
        this.createAudio()
        this.createAsyncLoad()
        if (this.id === 'home') this.createPoints()
        if (this.id === 'gallery') this.createScrollGsap()
        if (this.id === 'spotify') this.playHandle()
    }

    createAnimation() {
        each(this.elements.animationTitles, (element) => {
            new AnimationTitle({ element })
        })

        each(this.elements.animationParagraph, (element) => {
            new AnimationParagraph({ element })
        })

        each(this.elements.animationHighlight, (element) => {
            new AnimationHighlight({ element })
        })
    }

    createAudio() {
        this.sideAudio = new Audio('/Audio/mixkit-interface-hint-notification-911.wav')
        this.sideAudio.volume = 1
        this.elements.loadScreen.addEventListener('click', () => {
            this.sideAudio.play()
        })
    }

    createAsyncLoad() {
        each(this.elements.preloaders, (element) => {
            new AsyncLoad({ element: element.target ? element.target : element })
        })
    }

    show() {
        return new Promise((resolve) => {
            this.animationOut = GSAP.timeline()

            this.animationOut.set(this.elements.loadScreen, {
                left: '-200%',
            })

            this.animationOut.call(() => {
                resolve()
            })
        })
    }

    hide() {
        return new Promise((resolve) => {
            this.animationIn = GSAP.timeline()
            this.animationIn.set(this.elements.loadScreen, {
                autoAlpha: 1,
            })
            this.animationIn.set(this.elements.loadScreenImg, {
                autoAlpha: 1,
            })
            this.animationIn.to(this.elements.loadScreen, {
                duration: 1,
                width: '100%',
                left: '0%',
                ease: 'Expo.easeInOut',
            })
            this.animationIn.to(this.elements.loadScreen, {
                duration: 2,
                width: '100%',
                left: '100%',
                ease: 'Expo.easeInOut',
                // delay: ,
            })
        })
    }

    onResize() {
        if (this.elements?.wrapper) {
            this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
        }
    }

    onScroll(e) {
        this.scroll.target += e.pixelY
        if (this.scroll.target % 800 == 0) {
            this.sideAudio.play()
        }
    }

    onMousemove(e) {
        this.mouse.x = (e.clientX - window.innerWidth) * 0.01 + 5
        this.mouse.y = (e.clientY - window.innerHeight) * 0.01 + 5
    }

    onTouchStart(e) {
        this.y.start = e.touches[0].clientY
    }

    onTouchMove(e) {
        if (this.y.start > e.touches[0].clientY) {
            this.y.distance += 50
        } else {
            this.y.distance -= 100
        }
    }

    onTouchEnd(e) {
        // console.log(e.touches)
        // this.y.end += e.touches[0].clientY
    }

    update() {
        console.log(this.scroll.target)
        if (DetectionManager.isDesktop()) {
            this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)
        } else {
            this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.y.distance)
        }

        if (this.scroll.current < 0.01) {
            this.scroll.current = 0
        }

        if (this.y.distance < 0.01) {
            this.y.distance = 0
        }

        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.01)

        if (this.elements?.wrapper) {
            this.elements.wrapper.style[
                this.transformPrefix
            ] = `translate3d(0px,-${this.scroll.current}px, 0px)`
        }

        if (this.elements?.bar) {
            each(this.elements.bar, (element) => {
                element.style.transform = `translateX(-${this.scroll.current}px)`
            })
        }

        if (this.elements.points) {
            each(this.elements.points, (point, index) => {
                point.style.transform = `translateX(${this.mouse.x * (index + 1)}px) translateY(${
                    this.mouse.y * (index + 1)
                }px)`
            })
        }
    }

    addEventListener() {}
    removeEventListeners() {}

    destroy() {
        this.removeEventListeners()
    }
}

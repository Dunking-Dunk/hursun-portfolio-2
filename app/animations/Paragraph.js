import Animation from '../classes/Animation.js'
import GSAP from 'gsap'
import { calculate, split } from '../utils/text.js'

export default class Paragraph extends Animation {
    constructor({ element, elements }) {
        super({ element, elements })

        // this.elementSpan = split({ element: this.element })
    }

    animateIn() {
        this.timelineIn = GSAP.timeline()
        GSAP.set(this.element, {
            autoAlpha: 1,
        })

        this.timelineIn.fromTo(
            this.element,
            {
                autoAlpha: 0,
                y: '100%',
            },
            {
                autoAlpha: 1,
                y: '0%',
                ease: 'expo.out',
                duration: 2,
            },
            0
        )
    }

    animateOut() {
        GSAP.set(this.element, {
            autoAlpha: 0,
        })
    }
}

import Animation from '../classes/Animation.js'
import GSAP from 'gsap'

export default class Highlight extends Animation {
    constructor({ element, elements }) {
        super({ element, elements })
    }

    animateIn() {
        this.timelineIn = GSAP.timeline({
            delay: 1,
        })

        GSAP.set(this.element, {
            autoAlpha: 1,
        })
        this.timelineIn.fromTo(
            this.element,
            {
                height: 0,
            },
            {
                duration: 6,
                height: '100%',
                ease: 'expo.out',
            }
        )
    }

    animateOut() {
        GSAP.set(this.element, {
            autoAlpha: 0,
        })
    }
}

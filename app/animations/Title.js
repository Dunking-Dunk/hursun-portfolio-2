import GSAP from 'gsap'
import Animation from '../classes/Animation.js'
import each from 'lodash/each.js'
import { calculate, split } from '../utils/text.js'

export default class Title extends Animation {
    constructor({ element, elements }) {
        super({
            element,
            elements,
        })
        split({
            element: this.element,
            append: true,
        })

        split({
            element: this.element,
            append: true,
        })
        this.elementLinesSpans = this.element.querySelectorAll('span span')
    }

    animateIn() {
        this.timelineIn = GSAP.timeline({ delay: 0.5 })
        GSAP.set(this.element, {
            autoAlpha: 1,
        })

        each(this.elementLinesSpans, (line, index) => {
            this.timelineIn.fromTo(
                line,
                {
                    y: '100%',
                },
                {
                    delay: index * 0.2,
                    duration: 1.5,
                    ease: 'expo.out',
                    y: '0%',
                },
                0
            )
        })
    }

    animateOut() {
        GSAP.set(this.element, {
            autoAlpha: 0,
        })
    }
}

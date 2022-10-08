import Component from './Component.js'
import each from 'lodash/each.js'

export default class Animation extends Component {
    constructor({ element, elements }) {
        super({ element, elements })
        this.createObserver()
        this.animateOut()
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateIn()
                } else {
                    this.animateOut()
                }
            })
        })

        this.observer.observe(this.element)
    }

    animateIn() {}

    animateOut() {}
}

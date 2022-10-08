import Component from './Component.js'
import GSAP from 'gsap'

export default class Line extends Component {
    constructor(element, path) {
        super({
            element,
        })

        this.path = path
        this.coords = {
            x: 0,
            y: 0,
        }

        this.width = 0

        this.addEventListeners()
    }

    addEventListeners() {
        document.addEventListener('mousemove', (event) => {
            this.coords.x = event.clientX
            this.coords.y = event.clientY
            this.width = this.coords.x / window.innerWidth
            this.updateCoords(this.coords)
        })

        document.addEventListener('mouseout', (event) => {
            GSAP.to(this.path, {
                ease: 'elastic.easeOut(1, 0.3)',
                attr: { d: 'M250,0 Q250,250 250,500' },
            })
        })
    }

    updateCoords(coords) {
        this.coords.x = this.width * 500
        this.path.setAttribute('x2', coords.x)
        this.path.setAttribute('y2', coords.y)
    }
}

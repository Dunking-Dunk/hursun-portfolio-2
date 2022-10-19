import Component from '../classes/Component.js'

class Cursor extends Component {
    constructor(element) {
        super({ element })
        this.createCursor()
    }

    createCursor() {
        window.addEventListener('mousemove', (e) => {
            this.element.style.transform = `translateX(${e.clientX - 15}px) translateY(${
                e.clientY - 10
            }px)`
        })
    }
}

export default Cursor

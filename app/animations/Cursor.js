import Component from '../classes/Component.js'

class Cursor extends Component {
    constructor({ element }) {
        super({
            element,
            elements: {
                cursor: '.cursor',
            },
        })

        this.createCursorAnimation()
    }

    createCursorAnimation() {
        this.element.addEventListener('mouseover', (e) => {
            this.elements.cursor.classList.add('active')
        })
        this.element.addEventListener('mouseout', () => {
            this.elements.cursor.classList.remove('active')
        })
    }
}

export default Cursor

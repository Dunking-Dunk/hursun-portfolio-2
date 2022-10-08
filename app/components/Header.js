import Component from '../classes/Component.js'
import each from 'lodash/each.js'

export default class Header extends Component {
    constructor() {
        super({
            element: '.header',
            elements: {
                headerBtn: '.header__menu__button',
                menu: '.header__menu',
                audioBtn: '.audio__play',
                audioSpan: '.audio__play__span',
            },
        })

        this.createListener()
    }

    createAudio() {
        this.mainAudio = new Audio('/Audio/mixkit-fragments-of-bangkok-625.mp3')
        this.mainAudio.volume = 0.5
        this.mainAudio.loop = true
        this.mainAudio.play()
        each(this.elements.audioSpan, (element) => {
            element.classList.toggle('active')
        })
    }

    createListener() {
        this.elements.headerBtn.addEventListener('click', () => {
            this.elements.menu.classList.toggle('active')
        })

        this.elements.audioBtn.addEventListener('click', () => {
            each(this.elements.audioSpan, (element) => {
                element.classList.toggle('active')
            })

            if (this.mainAudio.paused) {
                this.mainAudio.play()
            } else {
                this.mainAudio.pause()
            }
        })
    }
}

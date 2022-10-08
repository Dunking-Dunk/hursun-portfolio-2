import Page from '../../classes/Page.js'

export default class Home extends Page {
    constructor() {
        super({
            element: '.home',
            id: 'home',
            elements: {
                wrapper: '.home__wrapper',
                bar: '.home__bar',
                points: '.home__end__points',
            },
        })
    }

    createPoints() {
        this.elements.points[0].addEventListener('click', () => {
            const audio = new Audio('/Audio/mixkit-sci-fi-robot-speaking-289.wav')
            audio.play()
        })
    }
}

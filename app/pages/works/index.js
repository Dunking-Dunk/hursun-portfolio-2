import Page from '../../classes/Page.js'
import Line from '../../classes/Line.js'

export default class Works extends Page {
    constructor() {
        super({
            element: '.work',
            id: 'work',
            elements: {
                wrapper: '.work__wrapper',
            },
        })

        // this.createLine()
    }

    createLine() {
        new Line('.work__works__container', document.querySelector('.works__container__line__path'))
    }
}

import Page from '../../classes/Page.js'

export default class Skills extends Page {
    constructor() {
        super({
            element: '.skills',
            id: 'skills',
            elements: {
                wrapper: '.skills__wrapper',
            },
        })
    }
}

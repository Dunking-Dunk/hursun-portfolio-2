import Page from '../../classes/Page.js'

export default class Hursun extends Page {
    constructor() {
        super({
            element: '.hursun',
            id: 'hursun',
            elements: {
                wrapper: '.hursun__wrapper',
            },
        })
    }
}

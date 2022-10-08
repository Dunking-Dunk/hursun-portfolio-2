import Page from '../../classes/Page.js'
import each from 'lodash/each.js'

export default class Spotify extends Page {
    constructor() {
        super({
            element: '.spotify',
            id: 'spotify',
            elements: {
                wrapper: '.spotify__wrapper',
                musicBtn: '.music__item__play',
                spotifyBtn: '.spotify__hero__btn',
            },
        })
    }

    playHandle() {
        each(this.elements.musicBtn, (btn) => {
            btn.onclick = () => {
                window.location.href = btn.getAttribute('data-song')
            }
        })
        this.elements.spotifyBtn.onclick = () => {
            window.location.href = this.elements.spotifyBtn.getAttribute('data-spotify')
        }
    }
}

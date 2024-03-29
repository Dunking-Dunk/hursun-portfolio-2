import each from 'lodash/each.js'
import NormalizeWheel from 'normalize-wheel'
import DetectionManager from './classes/Detection.js'

import Cursor from './components/cursor.js'
import Canvas from './components/canvas/index.js'
import Header from './components/Header.js'
import Preloader from './components/Preloader.js'
import Home from './pages/home/index.js'
import Works from './pages/works/index.js'
import Skills from './pages/skills/index.js'
import Gallery from './pages/gallery/index.js'
import Spotify from './pages/spotify/index.js'
import Hursun from './pages/hursun/index.js'

class app {
    constructor() {
        this.prevUrl = window.location.href

        this.createContent()
        this.createCanvas()
        this.createPreloader()
        this.createHeader()
        this.createCursor()
        this.createPages()
        this.addLinkListeners()
        this.addEventListener()
        this.update()
    }

    createContent() {
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template')
    }

    createCanvas() {
        this.canvas = new Canvas()
        this.canvas.onChange(this.template)
    }

    createPreloader() {
        this.preloader = new Preloader({ loadingManger: this.canvas.manager })
        this.preloader.once('completed', this.onPreloaded.bind(this))
    }

    onPreloaded() {
        this.header.createAudio()
        this.onResize()
        this.page.show()
    }

    createHeader() {
        this.header = new Header()
        this.header.createText(window.location.pathname.split('/')[1])
    }

    createCursor() {
        if (DetectionManager.isDesktop()) this.cursor = new Cursor('.cursor')
    }

    createPages() {
        this.pages = {
            home: new Home(),
            works: new Works(),
            skills: new Skills(),
            gallery: new Gallery(),
            spotify: new Spotify(),
            hursun: new Hursun(),
        }
        this.page = this.pages[this.template]
        this.page.create()
    }

    async onChange(url) {
        if (url !== this.prevUrl) {
            if (this.prevUrl.split('/')[3] === 'gallery') {
                this.content.style.height = '100%'
            }
            this.page.hide()
            const request = await window.fetch(url)
            if (request.status === 200) {
                const html = await request.text()
                const div = document.createElement('div')
                div.innerHTML = html

                window.history.pushState({}, '', url)

                const divContent = div.querySelector('.content')
                const headerContent = div.querySelector('.header__menu')
                this.template = divContent.getAttribute('data-template')

                this.content.setAttribute('data-template', this.template)
                this.content.innerHTML = divContent.innerHTML
                document.querySelector('.header__menu').innerHTML = headerContent.innerHTML
                this.header.createText(window.location.pathname.split('/')[1])

                this.page = this.pages[this.template]
                this.page.create()
                this.canvas.onChange(this.template)
                this.onResize()
                this.addLinkListeners()
                this.page.show()
            } else {
                console.log('Something went wrong')
            }
        }

        this.prevUrl = url
    }

    addLinkListeners() {
        const links = document.querySelectorAll('a')
        each(links, (link) => {
            let restricted =
                'mailto:sshursun@gmail.com, https://www.instagram.com/__hursun_ss__/, https://twitter.com/hursun2004, https://www.linkedin.com/in/hursun-ss-377659233/, https://portrrait.netlify.app/, https://chatapp-mocha.vercel.app/, https://movies-delta-coral.vercel.app/,  https://covid-web2.vercel.app/, https://socialize.vercel.app/'

            link.onclick = (e) => {
                if (restricted.indexOf(link.href) === -1) {
                    e.preventDefault()
                    const { href } = link
                    this.onChange(href)
                }
            }
        })
    }

    addEventListener() {
        window.addEventListener('resize', this.onResize.bind(this))

        window.addEventListener('wheel', this.onScroll.bind(this))
        window.addEventListener('mousemove', this.onMousemove.bind(this))

        window.addEventListener('touchmove', this.onTouchMove.bind(this))
        window.addEventListener('touchstart', this.onTouchStart.bind(this))
        window.addEventListener('touchend', this.onTouchEnd.bind(this))
    }

    onResize() {
        window.requestAnimationFrame(() => {
            if (this.page && this.page.onResize) {
                this.page.onResize()
            }
            if (this.canvas && this.canvas.onResize()) {
                this.canvas.onResize()
            }
        })
    }

    onScroll(e) {
        const normalize = NormalizeWheel(e)
        if (this.page && this.page.onScroll) {
            this.page.onScroll(normalize)
        }
        if (this.canvas && this.canvas.onScroll) {
            this.canvas.onScroll(normalize)
        }
    }

    onMousemove(e) {
        if (this.canvas && this.canvas.onMousemove) {
            this.canvas.onMousemove(e)
        }

        if (this.page && this.page.onMousemove) {
            this.page.onMousemove(e)
        }
    }

    onTouchStart(e) {
        if (this.canvas && this.canvas.onTouchStart) {
            this.canvas.onTouchStart(e)
        }

        if (this.page && this.page.onTouchStart) {
            this.page.onTouchStart(e)
        }
    }

    onTouchMove(e) {
        if (this.canvas && this.canvas.onTouchMove) {
            this.canvas.onTouchMove(e)
        }

        if (this.page && this.page.onTouchMove) {
            this.page.onTouchMove(e)
        }
    }
    onTouchEnd(e) {
        if (this.page && this.page.onTouchEnd) {
            this.page.onTouchEnd(e)
        }
    }

    update() {
        if (this.page && this.page.update) {
            this.page.update()
        }
        if (this.canvas && this.canvas.update) {
            this.canvas.update()
        }
        window.requestAnimationFrame(this.update.bind(this))
    }
}

new app()

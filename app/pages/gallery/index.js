import Page from '../../classes/Page.js'
import GSAP from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'

export default class Gallery extends Page {
    constructor() {
        super({
            element: '.content',
            id: 'gallery',
            elements: {
                scrollDist: '#content',
                app: '.gallery__scroll__images',
                imgGroup: '.gallery__images__imgGroup',
                img: '.gallery__images__image',
                detail: '#detail',
            },
        })
    }

    createScrollGsap() {
        this.addListeners()
        GSAP.registerPlugin(ScrollTrigger)
        GSAP.set('#content', {
            width: '100%',
            height: GSAP.getProperty('.gallery__scroll__images', 'height'),
            onComplete: () => {
                GSAP.set('.gallery__scroll__images,.gallery__images__imgGroup', {
                    opacity: 1,
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    perspective: 300,
                })
                GSAP.set(this.elements.img, {
                    position: 'absolute',
                    attr: {
                        id: (i, t, a) => {
                            //use GSAP's built-in loop to setup each image
                            this.initImg(i, t, a)
                            return 'img' + i
                        },
                    },
                })

                GSAP.timeline({
                    defaults: { duration: 1 },
                    scrollTrigger: {
                        trigger: '#content',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                })

                    .to('#txt1 ', { duration: 0.3, scale: 0, stagger: 0.05, ease: 'power1.in' }, 0)

                    .fromTo('.imgBox', { z: -5000 }, { z: 350, stagger: -0.3, ease: 'none' }, 0.3)
                    .fromTo(
                        '.imgBox img',
                        { scale: 3 },
                        { scale: 1.15, stagger: -0.3, ease: 'none' },
                        0.3
                    )
                    .to('.imgBox', { duration: 0, pointerEvents: 'auto', stagger: -0.3 }, 0.5)
                    .from(
                        '.imgBox img',
                        { duration: 0.3, opacity: 0, stagger: -0.3, ease: 'power1.inOut' },
                        0.3
                    )
                    .to(
                        '.imgBox img',
                        { duration: 0.1, opacity: 0, stagger: -0.3, ease: 'expo.inOut' },
                        1.2
                    )
                    .to('.imgBox', { duration: 0, pointerEvents: 'none', stagger: -0.3 }, 1.27)
                    .add('end')

                    .fromTo(
                        '#txt2',
                        { scale: 0.1, transformOrigin: '50%' },
                        { scale: 0.6, ease: 'power3' },
                        'end-=0.2'
                    )
                    .from(
                        '#txt2 path',
                        { duration: 0.4, scale: 0, ease: 'sine.inOut', stagger: 0.15 },
                        'end-=0.2'
                    )
            },
        })
    }

    initImg(i, t, a) {
        console.log(t.clientWidth)
        const box = document.createElement('div') // make a container div
        box.appendChild(t) // move the target image into the container
        this.elements.imgGroup.appendChild(box) // put the container into the imgGroup div
        GSAP.set(box, {
            pointerEvents: 'none',
            position: 'absolute',
            attr: { id: 'box' + i, class: 'imgBox' },
            width: 1920,
            height: 1080,
            overflow: 'hidden',
            top: '50%',
            left: '50%',
            x: t.dataset.x,
            y: t.dataset.y,
            xPercent: -50,
            yPercent: -50,
            perspective: 500,
        })

        // t.onmouseover =()=> gsap.to('#cursorCircle', {duration:0.2, attr:{r:30, 'stroke-width':4}})

        // t.onmousedown =()=> {
        //   gsap.to(t, {z:-25, ease:'power2'})
        //   gsap.to('#cursorCircle', {attr:{r:40}, ease:'power3'})
        // }

        // t.onmouseup =()=> gsap.to(t, {z:0, ease:'power1.inOut'})

        // t.onmouseout =()=> gsap.to('#cursorCircle', {duration:0.2, attr:{r:11, 'stroke-width':3}})

        t.onclick = () => this.showDetail(t)
    }

    onMousemove(e) {
        GSAP.to('.imgBox', {
            // move + rotate imgBoxes relative to mouse position
            xPercent: (-e.clientX / innerWidth) * 100,
            yPercent: -25 - (e.clientY / innerHeight) * 50,
            rotateX: 8 - (e.clientY / innerHeight) * 16,
            rotateY: -8 + (e.clientX / innerWidth) * 16,
        })

        GSAP.to('.imgBox img', {
            // move images inside each imgBox, creates additional parallax effect
            xPercent: (-e.clientX / innerWidth) * 10,
            yPercent: -5 - (e.clientY / innerHeight) * 10,
        })
    }

    showDetail(t) {
        GSAP.timeline()
            .set('#detailTxt', { textContent: t.alt }, 0)
            .set('#detailImg', { background: 'url(' + t.src + ') center no-repeat' }, 0)
            .fromTo('#detail', { top: '100%' }, { top: 0, ease: 'expo.inOut' }, 0)
            .fromTo('#detailImg', { y: '100%' }, { y: '0%', ease: 'expo', duration: 0.7 }, 0.2)
            .fromTo('#detailTxt', { opacity: 0 }, { opacity: 1, ease: 'power2.inOut' }, 0.4)
    }

    closeDetail() {
        GSAP.timeline()
            .to('#detailTxt', { duration: 0.3, opacity: 0 }, 0)
            .to('#detailImg', { duration: 0.3, y: '-100%', ease: 'power1.in' }, 0)
            .to('#detail', { duration: 0.3, top: '-100%', ease: 'expo.in' }, 0.1)
    }

    addListeners() {
        this.elements.detail.addEventListener('click', () => {
            this.closeDetail()
        })
    }
}

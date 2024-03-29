import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import fetch from 'node-fetch'
import moment from 'moment'
import methodOverride from 'method-override'
import UAParser from 'ua-parser-js'

const app = express()
const PORT = process.env.PORT
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

const client = prismic.createClient(process.env.PRISMIC_REPO_NAME, {
    fetch,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})

app.use(async (req, res, next) => {
    const ua = UAParser(req.headers['user-agent'])

    res.locals.isDesktop = ua.device.type === undefined
    res.locals.isPhone = ua.device.type === 'mobile'
    res.locals.isTablet = ua.device.type === 'tablet'

    res.locals.ctx = {
        prismicH,
    }

    res.locals.preloader = await client.getSingle('preloader')
    res.locals.meta = await client.getSingle('meta')

    res.locals.times = moment().format('MMMM dddd h:mm')
    res.locals.location = req.originalUrl
    next()
})

app.get('/', async (req, res) => {
    const response = await client.getSingle('home')
    res.render('pages/Home', { home: response.data })
})

app.get('/skills', async (req, res) => {
    const response = await client.getSingle('skills')
    const ids = response.data.branch.map((data) => {
        return data.skill.id
    })
    const skills = await client.getByIDs(ids)

    res.render('pages/Skills', { skills: skills.results.map((data) => data.data) })
})

app.get('/works', async (req, res) => {
    const response = await client.getSingle('works')
    res.render('pages/Works', { works: response.data })
})

app.get('/gallery', async (req, res) => {
    const response = await client.getSingle('gallery')
    res.render('pages/Gallery', { gallery: response.data })
})

app.get('/spotify', async (req, res) => {
    const response = await client.getSingle('spotify')
    res.render('pages/Spotify', { spotify: response.data })
})

app.get('/hursun', async (req, res) => {
    res.render('pages/Hursun', {})
})

app.listen(PORT || 3000, () => {
    console.log('listening on port ' + PORT || 3000)
})

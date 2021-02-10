const express = require('express')
const moment = require('moment')
//const template = require('./apis/template')
const knowledge = require('./apis/knowledge')
const router = express.Router()

router.use((req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    console.log(moment().format('YYYY-MM-DD HH:mm:ss') + ' ' + fullUrl)
    next()
})

//router.use('/template', template)
router.use('/knowledge', knowledge)
router.get('/*', (req, res) => {
    res.statusCode = 200
    res.json({ name: 'REST' })
})

module.exports = router

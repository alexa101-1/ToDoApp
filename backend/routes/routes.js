const express = require('express');
const router = express.Router();

const events = require('../data/events.json');
const items = require('../data/items.json')
const weeklyItems = require('../data/weeklyItems.json')
const myspace = require('../data/myspace.json')


router.get('/api/myspace', (req, res) => {
    res.json(myspace)
})

router.get('/api/today', (req,res) => {
    res.json(items)
})

router.get('/api/monthly', (req,res) => {
    res.json(events)
})

router.get('/api/weekly', (req,res) => {
    res.json(weeklyItems)
})

module.exports = router


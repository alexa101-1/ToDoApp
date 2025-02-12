const express = require('express');
const router = express.Router();
const items = require('../data/events.json');

// Route to get today's categories and items
router.get('/', (req, res) => {
    res.json(items);
});

module.exports = router;

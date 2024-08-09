const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{res.send ('All Products are open now')})

router.get('/item1', (req, res) => {res.send ('Item! not yet declared')})
module.exports = router;
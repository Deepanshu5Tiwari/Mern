const express = require('express');
const model = require('../models/productModel');
const router = express.Router();

router.get('/', (req, res) =>{res.send ('All Products are open now')})

router.get('/item1', (req, res) => {res.send ('Item! not yet declared')})

router.post('/delivery', (req, res) => {
    console.log(req.body);
    res.send('Yet To Delivered')
    
});


router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    res.send('get it by id')
    
});


module.exports = router;
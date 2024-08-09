const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    
    res.send('Response from user add here');
});

router.get('/getall', (req, res) => {
    res.send('Response from user getall');
});
//: colon denotes url parameter
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    
    res.send('Response from user id');
});
router.get('/update', (req, res) => {
    res.send('Response from user update');
});
router.get('/delete', (req, res) => {
    res.send('Response from user delete');
});

module.exports = router;
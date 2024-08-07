const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Response from user add');
});
router.get('/getall', (req, res) => {
    res.send('Response from user getall');
});
router.get('/getbyid', (req, res) => {
    res.send('Response from user id');
});
router.get('/update', (req, res) => {
    res.send('Response from user update');
});
router.get('/delete', (req, res) => {
    res.send('Response from user delete');
});

module.exports = router;
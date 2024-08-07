const express = require('express');
const router = express.Router();

router.get('/here', (req, res) =>{res.send ('Here is open now')})

module.exports = router;
const express = require('express');
const Model = require('../models/productModel')


const router = express.Router();

router.get('/', (req, res) =>{res.send ('All Products are open now')})

router.get('/item1', (req, res) => {res.send ('Item! not yet declared')})

router.post('/add', (req, res) => {
    console.log(req.body);
    
   new Model(req.body).save()
   .then((result) => {
       res.status(200).json(result);
   })
   .catch((err) => {
    console.log(err);
    
    res.status(500).json(err);
      
   });

});

router.get('/getall',  (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});
//: colon denotes url parameter
router.get('/getbyid/:id', (req, res) => {
   Model.findById(req.params.id)
   .then((result) => {
    res.status(200).json(result);

   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
    
   });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
     res.status(200).json(result);
 
    }).catch((err) => {
     console.log(err);
     res.status(500).json(err);
     
    });

});





module.exports = router;
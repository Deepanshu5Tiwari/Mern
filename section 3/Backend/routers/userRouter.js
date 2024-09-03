const express = require ('express');
const Model = require('../models/userModel');
 const jwt = require('jsonwebtoken')
const router = express.Router();



router.post('/add', (req, res) => {
    console.log(req.body);
    
   new Model(req.body).save()
   .then((result) => {
       res.status(200).json(result);
   })
   .catch((err) => {
    console.log(err);
    if(err.code === 11000){
        res.status(500).json({ message: 'Email already exists'});
    }else{
        res.status(500).json({ message: 'something went wrong'});
    }
      
   });

});

router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {

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
router.put('/update/:id', (req, res) => {
   Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            //generate token
        }else{
            res.status(401).json({message: 'Invalid credentials'});
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

module.exports = router;
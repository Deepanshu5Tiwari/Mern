const mongoose = require('mongoose');

const url = "mongodb+srv://deepanshu5tiwari:deep9918@cluster0.vxep5.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

//connect to the database

//asynchronous - returns a promise
mongoose.connect(url)
.then((result) => {
   console.log('connected to database');
    
})
.catch((err) => {
    console.log(err);
    
    
});


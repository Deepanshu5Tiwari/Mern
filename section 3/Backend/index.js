//importing express
const express = require('express');
const UserRouter = require('./routers/userRouter')
const ProductRouter = require('./routers/productRouter')

//initializing express
const app = express();
const port = 5000;
//middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
//route or endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

app.get('/getall', (req,res) =>{
    res.send('Here for getall');
});
app.get('/update', (req,res) =>{
    res.send('Here for Update');
});

app.listen( port, () => { console.log('server started')} );

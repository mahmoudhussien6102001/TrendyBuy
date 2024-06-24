// create server 
const express = require('express');
// security to http headers
const helmet = require('helmet');
// security to prevent convert html to js  
const xss = require('xss-clean');
// secuity  to prevent convert nosql injetion 
const mongoSanitize =require('express-mongo-sanitize');
// connected by mongdb
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/cateogryRouter');
const userRouter = require('./routes/userRouter');
const path =require('path');

const app = express();

// Middleware
app.use(helmet()); // Set security HTTP headers
 app.use(xss());  //  prevent convert html to javascript
app.use(mongoSanitize()); // prevent noSql injection 
app.use(express.json()); 
app.set('view engine' ,'pug' );
app.set('views' ,path.join(__dirname,'views'));
// Routes
app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/users', userRouter);

// Middleware to handle undefined routes

app.all('*', (req, res, next) => {
    res.status(404).json({
        status:'fail' ,
        message :`Can't find ${req.originalUrl} on this server`

});
});


/*
app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message :'Welcome to Trendy Buy'
    })
})
*/

// MongoDB connection 
mongoose.connect('mongodb://127.0.0.1:27017/trendybuy')
    .then(() => console.log('Connected to MongoDB done '))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const port = 48430;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

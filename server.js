const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config()

connectDB();

const app = express();

app.get('/',(req,res) => {
   res.send('API is running...');
});


app.get('/api/movies',(req,res) => {
    res.json(products);
 });


 app.get('/api/movie/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
 });


 const PORT = process.env.PORT || 5000;
 const MODE = process.env.NODE_ENV;



app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const movieRouter = require('./routes/moviesRoutes');


dotenv.config()

connectDB();

const app = express();

app.get('/',(req,res) => {
   res.send('API is running...');
});

app.use('/api/movies',movieRouter);



 const PORT = process.env.PORT || 8000;
 const MODE = process.env.NODE_ENV;



app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const movieRouter = require('./routes/moviesRouter');
const userRouter = require('./routes/userRouter');



dotenv.config()

connectDB();


const app = express();

app.use(express.json())


app.get('/',(req,res) => {
   res.send('API is running...');
});

app.use('/api/movies',movieRouter);
app.use('/api/users', userRouter);



app.use(notFound);

app.use(errorHandler);

 const PORT = process.env.PORT || 8000;
 const MODE = process.env.NODE_ENV;



app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));

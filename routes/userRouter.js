const express = require('express');
const { authUser } = require('../controllers/userController');


const userRouter = express.Router();



userRouter.post('/login',authUser)


module.exports = userRouter;

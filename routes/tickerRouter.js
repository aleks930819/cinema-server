const express = require('express');

const { protect, admin } = require('../middleware/authMiddleware');



const cinemaRouter = express.Router();
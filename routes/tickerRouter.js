const express = require('express');
const { getTickets, addTicket, } = require('../controllers/tickerController');

const { protect, admin } = require('../middleware/authMiddleware');

const ticketRouter = express.Router();

ticketRouter
  .route('/')
  .get(getTickets)
  .post(protect, addTicket)

ticketRouter.route('/:id')



module.exports = ticketRouter;

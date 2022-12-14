const asyncHandler = require('express-async-handler');
const Ticket = require('../models/ticketsModel');

const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});

  res.json(tickets);
});

const addTicket = asyncHandler(async (req, res) => {
  const { count, total, movieId, user,movieName,userName} = req.body;

  const ticket = new Ticket({
    count: count,
    total: total,
    movieId: movieId,
    movieName: movieName,
    userName:userName,
    user: user,
  });
  const createdTicket = await ticket.save();
  res.status(201).json(createdTicket);
});


module.exports = {
    getTickets,
    addTicket,

};

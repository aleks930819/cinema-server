const asyncHandler = require('express-async-handler');
const Ticket = require('../models/cinemasModel');

const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});

  res.json(tickets);
});

const getCinemaById = asyncHandler(async (req, res) => {
  const cinema = await Cinema.findById(req.params.id);
  if (cinema) {
    res.json(cinema);
  } else {
    res.status(404).json({ message: 'Cinema not found' });
  }
});

const deleteCinemaById = asyncHandler(async (req, res) => {
  const cinema = await Cinema.findById(req.params.id);
  if (cinema) {
    await cinema.remove();
    res.status(204).json({ message: 'Cinema removed successfully' });
  } else {
    res.status(404).json({ message: 'Cinema not found' });
  }
});

const updateCinemaById = asyncHandler(async (req, res) => {
  const { city, location, name, features, phone, imgUrl } = req.body;

  const cinema = await Cinema.findById(req.params.id);

  if (cinema) {
    cinema.city = city;
    cinema.location = location;
    cinema.name = name;
    cinema.features = features;
    cinema.phone = phone;
    cinema.imgUrl = imgUrl;

    const updatedCinema = await cinema.save();
    res.json(updatedCinema);
  } else {
    res.status(404);
    throw new Error('Cinema not found');
  }
});

module.exports = {
  getCinemas,
  getCinemaById,
  deleteCinemaById,
  updateCinemaById,
};

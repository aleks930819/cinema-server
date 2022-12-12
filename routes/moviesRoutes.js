const express = require('express');
const asyncHandler = require('express-async-handler');

const Movie = require('../models/movieModel');

const movieRouter = express.Router();

movieRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
  })

);

movieRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const movies = await Movie.findById(req.params.id);
    if (movies) {
      res.json(movies);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

module.exports = movieRouter;

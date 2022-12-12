const express = require('express');
const { getMovies, getMovieById } = require('../controllers/movieController');

const movieRouter = express.Router();

movieRouter.route('/').get(getMovies);

movieRouter.route('/:id').get(getMovieById);

module.exports = movieRouter;

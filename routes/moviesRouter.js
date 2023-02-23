const express = require('express');

const { protect, admin } = require('../middleware/authMiddleware');

const {
  getMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
  addMovie,
  reviewMovie,
} = require('../controllers/movieController');

const movieRouter = express.Router();

movieRouter.route('/').get(getMovies).post(protect, admin, addMovie);
movieRouter.route('/:id/reviews').post(protect, reviewMovie);
movieRouter
  .route('/:id')
  .get(getMovieById)
  .delete(protect, admin, deleteMovieById)
  .patch(protect, admin, updateMovieById);

module.exports = movieRouter;

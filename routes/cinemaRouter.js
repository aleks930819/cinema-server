const express = require('express');

const { protect, admin } = require('../middleware/authMiddleware');

const {
  getCinemas,
  getCinemaById,
  deleteCinemaById,
  updateCinemaById,
  addCinema,
} = require('../controllers/cinemasController');

const cinemaRouter = express.Router();

cinemaRouter.route('/').get(getCinemas).post(protect, admin, addCinema);
cinemaRouter
  .route('/:id')
  .get(protect, admin, getCinemaById)
  .delete(protect, admin, deleteCinemaById)
  .patch(protect, admin, updateCinemaById);

module.exports = cinemaRouter;

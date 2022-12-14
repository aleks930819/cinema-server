const express = require('express');
const {
  authUser,
  getUserProfile,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUserProfile,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const userRouter = express.Router();

userRouter.route('/').get(protect, admin, getUsers);
userRouter.route('/register').post(registerUser);
userRouter.post('/login', authUser);
userRouter.route('/profile').get(protect, getUserProfile);
userRouter
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .patch(protect, updateUserProfile)
  .get(protect, getUserById);

module.exports = userRouter;

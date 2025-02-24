const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/sign-up', userController);

module.exports = userRouter;
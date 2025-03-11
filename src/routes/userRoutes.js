const express = require('express');
const { getAllUsers, signUp, verifyAccount, resendVerificationCode, login, deleteUser, reportProfile} = require('../controllers/userController');
const authMiddleware = require('../auth/authMiddleware');
const userRouter = express.Router();

userRouter.get('/users', authMiddleware, getAllUsers)
userRouter.post('/users/sign-up', signUp);
userRouter.post('/users/verify-account', verifyAccount);
userRouter.post('/users/resend-verification-code', resendVerificationCode);
userRouter.post('/users/login', login);
userRouter.post('/users/delete/:id', authMiddleware, deleteUser)
userRouter.post('/users/report-profile/:id', authMiddleware, reportProfile)

module.exports = userRouter;
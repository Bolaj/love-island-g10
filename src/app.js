const express = require('express')

const authRouter = require('../src/routes/userRoutes')
const appRouter = express()

appRouter.use('/api/auth', authRouter)

module.exports = appRouter
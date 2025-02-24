const express = require('express')

const authRouter = require('../src/routes/userRoutes')
const appRouter = express()

appRouter.use('/api', authRouter)

module.exports = appRouter
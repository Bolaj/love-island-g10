const express = require('express')

const authRouter = require('../src/routes/userRoutes')
const loveRequestRouter = require('../src/routes/loveRequestRoutes')
const appRouter = express()

appRouter.use('/', authRouter)
appRouter.use('/love', loveRequestRouter)

module.exports = appRouter
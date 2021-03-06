import 'reflect-metadata'
import 'dotenv/config'

import cors from 'cors'

import express from 'express'

import { Routes } from '@routes/index'
import { prismaClient } from 'database'

const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(Routes)

const port = process.env.PORT || 3333

prismaClient.$connect()
  .then(() => {
    console.log('PrismaClient connected')
    app.listen(port, () => console.log(`Running on port ${port}`))
  })
  .catch(() => process.exit(1))

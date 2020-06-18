import '@babel/polyfill'
import express from 'express'
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const env = process.env.NODE_ENV || 'development'
const CONFIG = require('./config/config')[env]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000`),
)

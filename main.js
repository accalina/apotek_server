// # Libraries
const express = require('express')
const bp = require('body-parser')
const morgan = require('morgan')
const config = require('./config')
require('dotenv').config()

// # Instances
const app = express()

// # Middlewares
app.use(bp.json())                          // Request Handler
app.use(bp.urlencoded({'extended': true}))  // Request Handler
app.use(morgan('tiny'))                     // Logger Handler
app.use(express.static('static'))           // Static File Handler


// # Endpoints
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// # Run
app.listen(process.env.PORT, () => {
    console.log("Server Running on port " + process.env.PORT)
})
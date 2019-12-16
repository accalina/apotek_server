// # Libraries
const express   = require('express')
const bp        = require('body-parser')
const morgan    = require('morgan')
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
    res.send({msg: "Apotek API Service"})
})


require('./routes/User')(app);  // User Endpoint
require('./routes/Supplier')(app);  // Supplier Endpoint


// # Run
app.listen(process.env.PORT, () => {
    console.log("Server Running on port " + process.env.PORT)
})
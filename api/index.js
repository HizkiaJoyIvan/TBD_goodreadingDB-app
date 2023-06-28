const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3200
const countryRoute = require('./route/countryRoute')
const bookRoute = require('./route/bookRoute')
const publisherRoute = require('./route/publisherRoute')
const customerRoute = require('./route/customerRoute')
const transactionRoute = require('./route/transactionRoute')
const authorRoute = require('./route/authorRoute')
const addressRoute = require('./route/addressRoute')
const cityRoute = require('./route/cityRoute')

app.use(express.json())
app.use(cors())


app.use('/api/country', countryRoute)
app.use('/api/author', authorRoute)
app.use('/api/book', bookRoute)
app.use('/api/city', cityRoute)
app.use("/api/publisher", publisherRoute)
app.use("/api/address", addressRoute)
app.use('/api/customer', customerRoute)


app.get('/', (req,res) => {
    res.json('Message from server')
})

app.listen(port, () => {
    console.log(`App is litening on http://localhost:${port}`)
})

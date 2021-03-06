const mongoose = require('mongoose')

const cryptocurrenciesSchema = new mongoose.Schema({name:String, logo:String, price:String})
const eventsSchema = new mongoose.Schema({name:String, date:String})

mongoose.model('cryptocurrencies', cryptocurrenciesSchema)
mongoose.model('events', eventsSchema)
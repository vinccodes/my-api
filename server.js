require('dotenv').config()

const express = require('express')
const app = express()
const mealRouter = require('./routes/meals')
const mongoose = require('mongoose')

// Mongoose Config
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('err',(err)=>console.log('Error connecting to database'))
db.once('open',()=>console.log("Connected to Database"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/meals', mealRouter)

app.listen(3000, ()=> {
    console.log('Server running on port 3000')
})
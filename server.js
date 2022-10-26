// Dependencies 
const express = require('express');
const app = express()
const mongoose = require('mongoose')


// database config
const DATABASE_URL = "mongodb+srv://sei:aABlr4nXR1vg1WPC@cluster0.tertld9.mongodb.net/favoritebooks?retryWrites=true&w=majority"
// config 
// const port = 4000

//  Middleware

// Database
const books = require('./models/books.js');


// I N D U C E

//Index
app.get('/books', (req, res) => {
    res.send(books)
});

// Pulls environment vars into server.js from .env
require('dotenv').config()
const PORT = process.env.PORT 

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Database connection logs 
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

// create 
app.post("/books", (req, res) => {
    // take in some data from the user
    // save that data to our booklist db
    // send user back a verification message 
    res.send("received")
})

//Listener
app.listen(PORT, ()=> console.log(`You are listening to the smooth sounds of port ${PORT}...`))
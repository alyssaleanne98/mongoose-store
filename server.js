// Dependencies 
require('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Books = require('./models/books.js')
const methodOverride = require('method-override')

// Pulls environment vars into server.js from .env


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


// Middleware
// Body parser middleware - give us access to req.body
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride ("_method"))

// I N D U C E Index New Delete Update Create Edit Show 

//Index
// app.get('/books', (req, res) => {
//     Books.find({}, (error, allBooks) => {
//         console.log(error)
//         res.render('index.ejs', {
//             allBooks: allBooks
//         })
//     })
// });

//New 
app.get("/books/new", (req, res) => {
    res.render("new.ejs")
})


// create 
app.post("/books", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true 
    } else {
        req.body.completed = false
    }

    Books.create(req.body, (error, createdBooks) => {
        res.send(createdBooks);
    })
})

//Show 

// app.get("/books/:id", (req, res) => {
//     res.send("show route works")
// })




//Listener
app.listen(PORT, ()=> console.log(`You are listening to the smooth sounds of port ${PORT}...`))
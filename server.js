// Dependencies 
const express = require('express');
const app = express()

// config 
const port = 4000

//  Middleware

// Database
const books = require('./models/books.js');


// I N D U C E

//Index
app.get('/books', (req, res) => {
    res.send(books)
});

//Listener
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
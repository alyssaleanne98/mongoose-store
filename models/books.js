const mongoose = require('mongoose')

// this is our book schema
const booksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
})

// this is where we define our model using the schema we created 
const Books = mongoose.model("books", booksSchema)


// this is how we send vars to other files 
module.exports = Books

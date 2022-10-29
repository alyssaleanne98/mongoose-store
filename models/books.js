const mongoose = require('mongoose')

// // this is our book schema
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    completed: Boolean
})

// this is where we define our model using the schema we created 
const Books = mongoose.model("Books", bookSchema)


// this is how we send vars to other files 
module.exports = Books

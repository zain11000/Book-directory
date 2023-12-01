const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    tittle:String,
    author:String,
    genre:String,
    price: String,
    pages: String
});

const Book = mongoose.model('Book',bookSchema)

module.exports = Book
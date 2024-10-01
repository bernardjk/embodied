const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

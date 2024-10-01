const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb+srv://beideliu:BEIDEliu519!@library.s6jet.mongodb.net/?retryWrites=true&w=majority&appName=library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define your schema and model (Book should be defined here as shown above)
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
});

const Book = mongoose.model('Book', bookSchema);

// Read the JSON file
const dataPath = path.join(__dirname, 'ucla_store_books_newline.json'); // Update this path if necessary

fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Split the file into an array of books (since each book is on a new line)
  const books = data.split('\n').filter(Boolean).map(book => JSON.parse(book));

  // Insert books into the MongoDB collection
  Book.insertMany(books)
    .then(() => {
      console.log('Books inserted successfully');
      mongoose.connection.close(); // Close the connection when done
    })
    .catch(err => {
      console.error('Error inserting books:', err);
      mongoose.connection.close(); // Close the connection in case of an error
    });
});
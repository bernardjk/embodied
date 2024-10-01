const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb+srv://bernardjk:BEIDEliu519!@store.quyei.mongodb.net/?retryWrites=true&w=majority&appName=Store', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define your schema and model (Product should be defined here as shown above)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String
});

const Product = mongoose.model('Product', productSchema);

// Read the JSON file
const dataPath = path.join(__dirname, 'ucla_store_products_newline.json'); // Update this path if necessary

fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Split the file into an array of products (since each product is on a new line)
  const products = data.split('\n').filter(Boolean).map(product => JSON.parse(product));

  // Insert products into the MongoDB collection
  Product.insertMany(products)
    .then(() => {
      console.log('Products inserted successfully');
      mongoose.connection.close(); // Close the connection when done
    })
    .catch(err => {
      console.error('Error inserting products:', err);
      mongoose.connection.close(); // Close the connection in case of an error
    });
});
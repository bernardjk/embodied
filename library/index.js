const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

connectDB();

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, API is working!');
});

// Example API Route
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is your data!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const bookRoutes = require('./routes/bookRoutes');
app.use('/api', bookRoutes);

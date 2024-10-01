// const express = require('express')
// const app = express()
// const dotenv = require('dotenv')
// const cors = require('cors')
// const morgan = require('morgan')
// // MIDDLEWEARES
// dotenv.config({ path: './config/config.env' })
// require('./config/Db')
// app.use(cors())
// app.use(express.json())
// app.use(morgan('dev')) // for logging
// // ROUTES
// app.use('/api/v1', require('./routes/posts'))
// app.use('/api/v1', require('./routes/auth'))
// app.use('/api/v1', require('./routes/features'))
// PORT  = process.env.PORT || 5000
// app.listen(PORT, console.log(`SERVER RUNNING ON PORT: ${PORT}`))


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

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

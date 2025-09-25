
require('dotenv').config();

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const requestLogger = require('./middleware/requestLogger.js');
const auth = require('./middleware/auth.js');
const errorHandler = require('./middleware/errorHandler.js');
const productsRoutes = require('./routes/products.js');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware setup
app.use(bodyParser.json());
app.use(requestLogger);
app.use(auth);

// Use product routes
app.use('/api/products', productsRoutes); 

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
  req.next();
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 
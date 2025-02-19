const express = require('express');
const cors = require('cors');
const todayRoutes = require('./routes/today');
const monthlyRoutes = require('./routes/monthly')
const weeklyRoutes = require('./routes/weekly')

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Routes
app.use('/api/today', todayRoutes);
app.use('/api/monthly', monthlyRoutes);
app.use('/api/weekly', weeklyRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

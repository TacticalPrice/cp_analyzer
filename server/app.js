const express = require('express');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profile_routes');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5001;


connectDB();

app.use(express.json());

app.use('/api/profile' , profileRoutes);
app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
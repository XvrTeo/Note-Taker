const express = require('express');
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Starting the server

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);

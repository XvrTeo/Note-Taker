const fs = require('fs');
const path = require('path');

// Express

const express = require('express');
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Running on http://localhost:${PORT}`);
})

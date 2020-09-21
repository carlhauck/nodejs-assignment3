const path = require('path');
const express = require('express');

const app = express();

const guestRoutes = require('./routes/guest');
const { dirname } = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(guestRoutes);

app.listen(3000);
const express = require('express');
require('dotenv').config();
require('./db/db.config.js');

const port = process.env.PORT || 5000;
const routes = require('./routes/routes.js')


const app = express();

app.use(express.json());
app.use('/', routes);


app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Servidor en http://localhost:${port}`);
});
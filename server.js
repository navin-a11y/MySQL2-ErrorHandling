const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');

const PORT = 3011

app.listen(PORT);
console.log(`server is running on ${PORT}`);
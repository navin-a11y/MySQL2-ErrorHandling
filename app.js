const express = require('express');
const userRoute = require('./Router/userRouter');

const globalErrorHandling = require('./Controller/errorController');

const app = express();

app.use(express.json());
app.use(userRoute);
app.use(globalErrorHandling);

module.exports=app;
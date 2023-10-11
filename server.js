const express = require('express');
const dotenv = require('dotenv');
const api = require('./routes/api');
const connectDB = require('./config/db');

dotenv.config({
  path: './config/config.env'
});

const morgan = require('morgan');
// 使用morgan中间件

const app = express();
app.use('/api', api);

app.use(morgan('dev'));
app.use(morgan('short'));
// TODO 数据库
// connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT);
// app.listen(PORT, morgan(':method :url :status :res[content-length] - :response-time ms'));

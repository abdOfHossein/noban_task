const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('dotenv').config();
const indexRouter = require('./routes/index');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Server is Runing on URL ===>${process.env.HOST}:${process.env.PORT}`,
    );
});

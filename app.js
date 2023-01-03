const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/ticket');

const app = express();





app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Server is Runing on URL ===>${process.env.HOST}:${process.env.PORT}`,
    );
});
import '@babel/polyfill';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const env = process.env.NODE_ENV || 'development';
const CONFIG = require('./config/config')[env];

const v1 = require('./routes/v1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const models = require('./models');
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL database:', CONFIG.database);
  })
  .catch((err) => {
    console.error('Unable to connect to SQL database:', CONFIG.database, err);
  });

app.use('/v1', v1);

app.use('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', CONFIG.app_url);
  res.header('Access-Control-Allow-Credentials', true);
  res.statusCode = 200; //send the appropriate status code
  res.json({ status: 'success', message: 'Parcel Pending API', data: {} });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen({ port: CONFIG.app_port }, () =>
  console.log(`🚀 Server ready at http://localhost:5000`),
);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//añadimos a continuación variable en la que requerimos método Override que hemos instalado previamente (por la terminal con npm install method- override --save)
var methodOverride = require('method-override');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var controlador = require('./routes/controlador');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//a continuación añadimos para utilizar la variable que hemos creado arriba para llamar al paquete override, añadiendo una función 
app.use(methodOverride((req, res)=>{
	if(req.body.metodo){
		var method = req.body.metodo;
		delete req.body.metodo;
		return method;

	}
}));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/', controlador);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

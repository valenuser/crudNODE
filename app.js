var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var server = require('http').Server(app)
var io = require('socket.io')(server)
var pool = require('./db/db')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

io.on('connection',(socket)=>{
  
  socket.on('client:load',()=>{
    pool.query('show databases',(err,result)=>{
      io.emit('server:loadData',result)
    })
  })

  socket.on('client:deleteDB',(idDB)=>{
    pool.query('drop database '+idDB+'')
    pool.query('show databases',(err,result)=>{
      io.emit('server:loadData',result)
    })
    })

  socket.on('client:addDB',(nameDB)=>{
      pool.query('create database '+nameDB+'')
      pool.query('show databases',(err,result)=>{
        io.emit('server:loadData',result)
      })
  })

  socket.on('client:showTables', (nameDB)=>{
    pool.query('show tables from '+nameDB+'',(err,result)=>{

      let data = []
      let sendData = []

      for(let i = 0;i < result.length;i++){
        let properTable = Object.values(result[i])
        data.push(properTable)
      }

      for(let i = 0;i < data.length;i++){
        sendData.push(data[i][0])
      }
      
      io.emit('server:showTables', sendData);
    })
  })
})





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

module.exports = {app:app,server:server};

const express = require('express');
const app = express();
var path = require('path');

var indexRouter = require('./routes/index');
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});
const express = require('express');
const dbConnect = require('./config/db')
const enrutador = require('./routes/enrutador')
const path = require('path');
var app = express();
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'))

app.use('/',enrutador);

app.get('/', function (req, res){
    res.render('pages/index');
});

app.listen(8090, function(){
    console.log('Example app listening on port 8090!')
})

dbConnect()


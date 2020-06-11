var express = require('express');
var app = express();
var router = require('./router/main')(app);

var server = app.listen(3001, function(){
    console.log("Express server has started on port 3001")
})
app.set('views','../front');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('../front'));

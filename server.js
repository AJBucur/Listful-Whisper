process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

/*var hasName = function (req, res, next){
    if (req.param('name')){
        next();      
    }else{
        res.send('What is your name?');
    }
};

var sayHello = function (req, res, next){
    res.send ('Hello ' + req.param('name'));
};

var app = express();
app.get ('/', hasName, sayHello);*/

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('index');
})

app.post('/', function(req, res){
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;

    console.log('The full name is ' + firstName + ' ' + lastName);
})

app.listen(3000);
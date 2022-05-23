var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

var app = express();
var server = http.createServer(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


var db = new sqlite3.Database('./database/form.db');

//Instance of express.js and database directory.
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());
app.use(limiter);

//Creates table, name, email, message
db.run('CREATE TABLE IF NOT EXISTS responses(name TEXT, email TEXT, message TEXT)');

//Get request
app.get('/', function(req,res){
  res.sendFile('./index.html');
  });

//if site URL doesn't exist, display error code 404, with the message page does not exist
app.get('*', function(req, res){
  res.status(404).send('Error 404: Page Does Not Exist');
});


//Post request (form)
//Insert
app.post('/add', function(req,res){
    db.serialize(()=>{
      db.run('INSERT INTO responses(name,email,message) VALUES(?,?,?)', [req.body.name, req.body.email, req.body.message], function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New form has been added");
        res.send("New form has been added into the database with name = "+req.body.name+ " and email = "+req.body.email);
      });
  });
  });


//Server Listen on port 3000
//The server application will listen to all requests made by the browser.
server.listen(3000,function(){
    console.log("Server listening on port: 3000")
});

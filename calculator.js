//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname/index.html);
});

app.post("/", function (req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  console.log(req.body);
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

/*code that you need to write
every single time you want to use Body Parser.
it allows you to go into any of your routes, and you can tap into something called request.body,
and this is the parsed version of the HTTP request.*/
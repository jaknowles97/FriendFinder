var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); 
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


var friends = require("./app/data/friends.js");
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("Listening on https://localhost:3000");
})
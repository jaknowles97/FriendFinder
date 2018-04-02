var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); 
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var seeds = require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
//var apiRoutes = require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, function() {
    console.log("Listening on https://localhost:3000");
})
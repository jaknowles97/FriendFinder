var path = require("path");
var friends = require("/friends.js");

exports = function(app) {
    app.get("/api/friends", function() {
        res.json(friends);
    });

    app.post("/api/friends" , function() {

    });
}
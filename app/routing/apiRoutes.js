var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var userScores = newUser.scores
        var difference;
        var bestMatch = {
            name: "",
            img: "",
            totalDiff: 999
        }
        // go through every friend
        for(var i=0; i < friends.length; i++) {
            difference = 0;
            console.log(friends[i].name);
            // current incomming answer - current friend answer
           for(var j=0; j < friends[i].scores[j]; j++) {
                difference += Math.abs(parseInt(newUser.scores[j]) - parseInt(friends[i].scores[j]));

            }
            if(difference <= bestMatch.totalDiff) {
                bestMatch.name = friends[i].name;
                bestMatch.img = friends[i].img;
                bestMatch.totalDiff = difference;
            }

        }

        // add the new user to friends array and return their new couch comrade 
        friends.push(newUser)
        res.json(bestMatch)
        console.log(bestMatch);
    });
}
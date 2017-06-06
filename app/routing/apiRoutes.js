var friendList = require('../data/friend-data.json');
var fs = require('fs');

// var $ = require('jquery');
// bmc: if I try to require jquery here, I get "it needs a window"
// bmc: ????????????????????????????????????

// require("../public/survey.js");
// bmc: Would be great if I could use the info/variables over in survey.js
// bmc: ????????????????????????????????????

// exports.showFriends = app.get('/api/friends', function (req, res) {
//    res.json()
// })
// bmc: this crap doesn't work either

// bmc: this thing works, but I suspect it has all the wrong bits
module.exports = function (app) {
    app.post('/friend-list', function (req, res) {
        // bmc: the newFriend is the current user
        var newFriend = req.body;

        // bmc: this initializes the best friend and the score
        // bmc: max score is 50 if one of the hosers doesn't input anything
        // bmc: and since I'm not yet validating the input, that could happen
        var bestFriend = [];
        var bestFriendScore = 50;

        // bmc: where the magic happens
        for (var i = 0; i < friendList.length; i++) {
            var friendValue = 0;
            for (var j = 0; j < 10; j++) {
                jthTerm = Math.abs(newFriend.scores[j] - friendList[i]
                                .scores[j]);
                friendValue += jthTerm;
            }
            // bmc: and if this current friend has a lower friend score difference, well, that's the new best friend
            if (friendValue < bestFriendScore) {
                bestFriend = friendList[i];
                bestFriendScore = friendValue;
            }
        }

        // bmc: then return the friend
        console.log('the new best friend is', bestFriend);
        // bmc: I need this to go to the window, but #sheesh...

        // showNewBestFriend(bestFriend);
        // this doesn't work

        exports.pleaseShowBestFriendAlready = bestFriend;
        // bmc: can I export this ^^^^^^ information like this?
        // bmc: ????????????????????????????????????

        // bmc: this next bit saves the new person in the friend-data.json file
        // bmc: this works
        fs.readFile('app/data/friend-data.json', 'utf-8', function (err, data) {
            if (err) throw err;

            var arrayOfObjects = JSON.parse(data);
            arrayOfObjects.push(newFriend);

            fs.writeFile('app/data/friend-data.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err;
                console.log('New person added to the potential friend list!');
            })
        });

        // bmc: ????????????????????????????????????
        // bmc: I'm not sure what *.json does
        res.json(newFriend);
        // bmc: I think it just displays a big fat json file in the window
    });
};






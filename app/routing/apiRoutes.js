var friendList = require('../data/friend-data.json');

var fs = require('fs');

module.exports = function (app) {
    app.post('/friend-list', function (req, res) {
        var newFriend = req.body;

        var bestFriend = [];
        var bestFriendScore = 50;

        for (var i = 0; i < friendList.length; i++) {
            var friendValue = 0;
            for (var j = 0; j < 10; j++) {
                jthTerm = Math.abs(newFriend.scores[j] - friendList[i]
                                .scores[j]);
                friendValue += jthTerm;
            }
            console.log('this friend has a score of', friendValue);
            if (friendValue < bestFriendScore) {
                bestFriend = friendList[i];
                bestFriendScore = friendValue;
                console.log('new friend!', bestFriend);
            }
        }

        // bmc: then return the friend
        console.log('the new best friend is', bestFriend);

        // bmc: this next bit saves the new person in the friend-data.json file
        fs.readFile('app/data/friend-data.json', 'utf-8', function (err, data) {
            if (err) throw err;

            var arrayOfObjects = JSON.parse(data);
            arrayOfObjects.push(newFriend);

            fs.writeFile('app/data/friend-data.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err;
                console.log('New person added to the potential friend list!');
            })
        });

        // bmc: I'm not sure what *.json does
        res.json(newFriend);
    });
};

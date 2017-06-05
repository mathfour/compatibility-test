var friendsData = require('../data/friends.js');
// var $ = require("jquery")(window);


module.exports = function (app) {
    console.log('we have launched the apiRoutes.js');
    app.post('/friend-list', function (req, res) {
        console.log('we are trying to post through the apiRoutes.js');
        var newFriend = req.body;
        // bmc: need to do logic and find the matching friend
        console.log(newFriend.name);
        console.log(newFriend.photo);
        console.log(newFriend.q1);

        console.log(friendsData[0].name);
        console.log(friendsData[0].photo);
        console.log(friendsData[0].scores[0]);

        var bestFriend = [];
        var bestFriendScore = 0;

        for (var i = 0; i < friendsData.length; i++) {
            var friendValue = 0;
            for (var j = 0; j < 10; j++) {
                jthTerm = Math.abs(newFriend.scores[j] + friendsData[i]
                                .scores[j]);
                console.log('the', j + 1, 'th term for friendsData', i, ' is', jthTerm);
                friendValue += jthTerm;
            }
            console.log('this friend has a score of', friendValue);
            if (friendValue > bestFriendScore) {
                bestFriend = friendsData[i];
                bestFriendScore = friendValue;
                console.log('new friend!', bestFriend);
                // res.send("this is the new friend", bestFriend);
                // $('#results').html('your new friend is', bestFriend);
            }
        }

        // bmc: then return the friend
        console.log('the new best friend is', bestFriend);
        // $("#willThisWork").html('your new best friend is', bestFriend);

        // bmc: this is not really saving the new friend in the list right now but I'll need to figure out how to save it (it only pushes it to the array in local memory (or session memory))
        friendsData.push(newFriend);
        // bmc: I'm not sure what *.json does
        res.json(newFriend);
    });
};

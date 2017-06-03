module.exports = function (app) {
    console.log('we have launched the apiRoutes.js');
    app.post('/friend-list', function (req, res) {
        console.log('we are trying to post through the apiRoutes.js');
        var newFriend = req.body;
        // bmc: need to do logic and find the matching friend
        // bmc: then return
        friendsData.push(newFriend);

        res.json(newFriend);
    });
};

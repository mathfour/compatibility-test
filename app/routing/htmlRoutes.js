// QFQ13320
// bmc: this code works

var path = require('path');
// var friendData = require('/../data/friend-data.json');
// bmc: would be great if that ^^^^^ worked

module.exports = function (app) {
    // bmc: home page
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    // bmc: the survey itself
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // bmc: the list of friends so far (contrived and/or scraped)
    app.get('/api/friends', function (request, response) {
        response.sendFile(path.join(__dirname + '/../data/friend-data.json'));
    })
};


// QFQ13320
// bmc: this code works

console.log('we have launched the htmlRoutes.js file');

var path = require('path');

module.exports = function (app) {
    app.get('/', function (request, response) {
        console.log('heading to the slash');
        response.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/survey', function (request, response) {
        console.log('heading to slash survey');
        response.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
};


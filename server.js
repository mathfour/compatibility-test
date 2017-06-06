var express = require("express");
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 4347;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
// require('./app/public/survey.js');
// bmc: not using this ^^^^^ because we use the app.use above

app.listen(PORT, function () {
    console.log('Open a browser and type http://localhost:%s in the url address box and press enter.', PORT);
});
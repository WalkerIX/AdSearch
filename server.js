var express = require('express');
var app = express();
var nodeadmin = require('./vendor/nodeadmin');

app.use(nodeadmin(app));

app.get('/', function (req, res){ res.send('Hello there, world!\n');
});

var port = 9000;
app.listen(port);
console.log('Listening on port', port);
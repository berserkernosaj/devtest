var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:8785'
};
var port = 8785;
var app = express();


app.use(express.static(__dirname + '/www'));
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log('Listening on port' + port);
})

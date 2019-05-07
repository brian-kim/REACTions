var express = require('express');
var Score = require('../database/index.js');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/scores', function (req, res) {
  Score.find({}).sort('reactionTime')
    .then(scores => res.status(200).send(scores))
    .catch(err => res.status(500).send(err))
});

app.post(`/scores`, (req, res) => {
  Score.create(req.body)
    .then(response => res.status(201).send(response))
    .catch(err => res.status(500).send(err))
});

app.listen(9000, function() {
  console.log('listening on port 3000!');
});


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MVP', {useMongoClient: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var scoreSchema = mongoose.Schema({
  username: String,
  reactionTime: Number
});

var Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
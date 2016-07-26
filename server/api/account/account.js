var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
  username : String,
  password : String
});

var accountModel = mongoose.model('user', accountSchema);

module.exports = function(app, config) {
  app.post('/api/users', function(req, res) {
    console.log(req.body);
    var promise = accountModel.find(req.body);

    promise.then(function(response) {
      res.send(JSON.stringify(response));
    });
  });
};

// var mongoose = require('mongoose');
//
// var Schema = mongoose.Schema;
//
// var userSchema = new Schema({
//   name : String,
//   address : String
// });
//
// var UserModel = mongoose.model('user', userSchema);
//
// module.exports = function(app, config) {
//   app.get('/api/users', function(req, res) {
//     var promise = UserModel.find();
//
//     promise.then(function(response) {
//       res.send(JSON.stringify(response));
//     });
//   });
// };

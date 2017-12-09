const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String
});

// Export Mongoose model
export default mongoose.model('register', registerSchema);

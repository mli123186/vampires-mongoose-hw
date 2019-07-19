const mongoose = require('mongoose')

//a schema tells mongodb what our documents should
// look like what are objects in mongodb look like
const vampireSchema = new mongoose.Schema({
  name: { type: String, required: true},
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: {type: Number, required: true, min: 0}
});

const Vampire = mongoose.model('vampireSchema', vampireSchema);
 
module.exports = Vampire;
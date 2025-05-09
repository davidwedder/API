const mongoose = require('../config/database');
const {Schema} = mongoose;

const TaskSchema = new Schema({
  macaddress: {type: String},
  type: {type: Number},
  title: {type: String},
  description: {type: String},
  when: {type: Date},
  done: {type: Boolean},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Task', TaskSchema);
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const querySchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['Open', 'InProgress', 'Closed'],
    default: 'Open',
  },
  resolution: {
    type: String,
    maxlength: 100,
  },
  notes: [noteSchema],
});

module.exports = mongoose.model('Query', querySchema);

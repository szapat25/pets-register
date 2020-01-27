const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    gender: {type: String, require: true},
    breed: { type: String, required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('Pets', petSchema)
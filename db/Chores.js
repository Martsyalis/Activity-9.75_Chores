// define schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChoresSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    validate: [({ length }) => length <= 50, "name is too long, ADIDAS!!!"],
  },
  // use Enum and ref to restrict roomates to only current roommates
  roommate: {
    type: String,
    trim: true,
    required: true,
    validate: [({ length }) => length <= 50, "name is too long, ADIDAS!!!"],
  },
  completedAt: {
    type: Date,
    trim: true,
    required: true,
    validate: [
      (date) => date < new Date(),
      "Completed At has to get a date thats earlier then current date",
    ],
  },
  frequency: {
    type: String,
    trim: true,
    enum: ['Monday', 'Tuesday', "Wednesday"]
  },
  difficulty: {
      type: Number,
      validate: [(num) => num > 0 && num < 6, 'difficulty must be between 1 and 5']
  }
});

const Chores = mongoose.model('Chores', ChoresSchema);

module.exports = Chores;

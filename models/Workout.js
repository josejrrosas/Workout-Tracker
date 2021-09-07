const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise",
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a type for exercise",
  },
  weight: {
    type: Number,
    required: "Enter an amount",
  },
  sets: {
    type: Number,
    required: "Enter an amount",
  },
  reps: {
    type: Number,
    required: "Enter an amount",
  },
  duration: {
    type: Number,
    required: "Enter an amount",
  },
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
// I should also be able to track the name, 
// type, weight, sets, reps, and duration of exercise.
//  If the exercise is a cardio exercise, I should be able 
//  to track my distance traveled.

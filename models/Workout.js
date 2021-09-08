const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
// I should also be able to track the name, 
// type, weight, sets, reps, and duration of exercise.
//  If the exercise is a cardio exercise, I should be able 
//  to track my distance traveled.

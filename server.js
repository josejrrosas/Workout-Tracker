const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerdb", { useNewUrlParser: true });

app.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/stats.html"));
});

//getLastWorkout
app.get("/api/workouts",function(req,res){  
    db.Workout.find()
    .then(dbWorkout =>{  
        res.json(dbWorkout)
    })
    .catch(err => { 
        res.json(err)
    })
});

//addExercise
app.put("/api/workouts/:id",function(req,res){  
    db.Workout.create(body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

//createWorkout
app.post("/api/workouts/",function(req,res){  
    db.Workout.create()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//getWorkoutsInRange
app.get("/api/workouts/range",function(req,res){  
    db.Workout.find()
    .then(dbWorkout =>{  
        res.json(dbWorkout)
    })
    .catch(err => { 
        res.json(err)
    })
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
const router = require("express").Router();
const workouts = require("../models")

router.get("/api/workouts", (req, res) => {
  workouts.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
    console.log(err)
  })
});

router.post("/api/workouts", (req, res) => {
  workouts.Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
    console.log(err)
  })
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  workouts.Workout.findOneAndUpdate(
    { _id: id }, 
    { $push: { exercises: body }})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
  workouts.Workout.find()
  .sort({ _id: -1 })
  .limit(7)
  .then(dbWorkout => {
    console.log(dbWorkout)
    res.json(dbWorkout.reverse());
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err)
  });
});

module.exports = router;
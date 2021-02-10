const db = require("../models");
const { Mongoose, Types } = require("mongoose");
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:workout", ({ params, body }, res) => {
    console.log("hi", params.workout);
    db.Workout.findByIdAndUpdate(
      params.workout.trim(),
      { $push: { exercises: body } },
      { new: true, upsert: true, useFindandModify: false }
      //
      //   (updateWorkout) => {
      //     res.json(updatedWorkout);
      //   }
      //   (updateWorkout) => {
      //     res.json(updatedWorkout);
      //   }
    )
      .then((updateWorkout) => {
        console.log(updateWorkout);
        res.json(updateWorkout);
      })
      .catch((err) => {
        console.log("OH NO", err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });
};

const db = require("../models");
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
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  app.put("/api/workouts/:workout", ({ params, body }, res) => {
    console.log(params, body);
    db.Workout.findOneAndUpdate(
      { _id: params.workout },
      { $push: { excercises: body } },
      { new: true, upsert: true, useFindandModify: false }
      //   (updateWorkout) => {
      //     res.json(updatedWorkout);
      //   }
      //   (updateWorkout) => {
      //     res.json(updatedWorkout);
      //   }
    ).then((updateWorkout) => {
      res.json(updatedWorkout);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });
};

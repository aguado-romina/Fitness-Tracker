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

  app.put("/api/workouts/:workout", ({ params, body }, res) => {
    db.Workout.findOneAndUpdate(
      { _id: params.id },
      { $push: { excercises: body } },
      { upsert: true, useFindandModify: false },
      (updateWorkout) => {
        res.json(updatedWorkout);
      }
    );
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkout);
    });
  });
};

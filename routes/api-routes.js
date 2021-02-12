const db = require("../models");
// const { Mongoose, Types } = require("mongoose");
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
    // db.Workout.find({}, (err, workouts) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.json(workouts);
    //   }
    // });
  });

  app.put("/api/workouts/:id", (req, res) => {
    // app.put("/api/posts/:id", function(req, res) {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
      },
      // { exercises: req.body.exercises }
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      console.log(newWorkout.day.getDay());
      res.json(newWorkout);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        console.log(workout);
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
//-------------------------------------------------------//
// console.log("hi", params.workout);
// db.Workout.findByIdAndUpdate(
//   params.workout.trim(),
//   { _id: params.id },
//   { _id: params.workout },
//   { $push: { exercises: body } },
//   { new: true, upsert: true }
//useFindandModify: false
//   (updateWorkout) => {
//     res.json(updatedWorkout);
//   }
//   (updateWorkout) => {
//     res.json(updatedWorkout);
//   }
// )
//   .then((updateWorkout) => {
//     console.log(updateWorkout);
//     res.json(updateWorkout);
//   })
//   .catch((err) => {
//     console.log("OH NO", err);
//   });
// });

// };
//----------------------------------------------------//

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WorkoutSchema= new Schema(
    {
      day: Date,
      exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Required"
          },
        
          name: {
            type: String,
            trim: true,
            required: "Required"
          },
        
          duration: {
            type: Number,
          },
        
          weight: {
            type: Number,
          },
          reps: {
            type: Number,
          }, 
          sets: {
            type: Number,
          }, 
          distance: {
            type: Number,
          },
          day: {
            type: Date,
          }

        }]
    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

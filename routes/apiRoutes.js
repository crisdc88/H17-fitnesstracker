const Workout = require("../db_modules/workout.js");
const express = require("express")
const Path = require("path")


module.exports = function(app){

    app.get("/exercise", function(req, res){
        console.log(Path.join(__dirname,"../public/exercise.html"));
        res.sendFile(Path.join(__dirname,"../public/exercise.html"));
    })


    app.get("/api/workouts", function(req, res){
        // sort('day',-1)
        Workout.find({}, {},{sort: {'day':1}}).then(lastworkout =>{
           
            console.log("api workouts", lastworkout)  
            res.json(lastworkout)
            
        })
    })

  
  
}



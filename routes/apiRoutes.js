const Workout = require("../db_modules/workout.js");
const express = require("express")
const Path = require("path")


module.exports = function(app){

    app.get("/exercise", function(req, res){
        console.log(Path.join(__dirname,"../public/exercise.html"));
        res.sendFile(Path.join(__dirname,"../public/exercise.html"));
    })

    app.get("/stats", function(req, res){
        // console.log(Path.join(__dirname,"../public/exercise.html"));
        res.sendFile(Path.join(__dirname,"../public/stats.html"));
    })

    app.get("/api/workouts", function(req, res){
        // sort('day',-1)
        Workout.find({}, {},{sort: {'day':1}}).then(lastworkout =>{
           
            console.log("api workouts", lastworkout)  
            res.json(lastworkout)
            
        })
    })

    app.post("/api/workouts", function({body}, res){
        // console.log("here at post",body)

        Workout.create(
            {day: Date.now(), body}
        )
        .then(workout=>{
            res.json(workout)
        })
        .catch(err=>{
            res.json(err)
        })
    })

    app.put("/api/workouts/:id", function(req, res){
        // console.log("here at put", req.params.id)
        // console.log("the body", req.body)
        Workout.findByIdAndUpdate(req.params.id, {
            $push:{
                // day: Date.now(),
                exercises: req.body
            }
        })
        .then(workout=>{
            res.json(workout)
        })
        .catch(err=>{
            res.json(err)
        })
    })


    app.get("/api/workouts/range", function(req, res){
        // sort('day',-1)
        Workout.find({}).then(allworkouts =>{
           
            console.log("api RANGE", allworkouts)  
            res.json(allworkouts)
            
        })
    })
}



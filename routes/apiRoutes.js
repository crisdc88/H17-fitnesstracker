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
        //    let durationtotal=0;
        //    let exercisesArray = [...lastworkout];
        //    console.log("array ex." , exercisesArray)
            // for(let i =0 ; i < lastworkout[lastworkout.length -1].exercises.length;i++){
            //     // durationtotal =+ lastworkout[lastworkout.length -1].exercises[i].duration;
            //     console.log(lastworkout[lastworkout.length -1].exercises[i].duration)
            //    let exDuration =  lastworkout[lastworkout.length -1].exercises[i].duration
            //     durationtotal = durationtotal + exDuration;
            // }

           
            // console.log("api workouts", lastworkout[lastworkout.length -1])  

            res.json(lastworkout)
            
        })
    })

    app.post("/api/workouts", function({body}, res){
        // console.log("here at post",body)
        
        // console.log(req.body)
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
        // console.log("the request", req)
        // console.log("the body", req.body)

        let total = 0;
    //    find the total duration for that id then add and update

        Workout.findById(req.params.id).then( (record) => {
            
            //  console.log("total record by id in put:  " + record.totalDuration);
             total =record.totalDuration + req.body.duration;
             console.log("final total:" , total)

             Workout.findByIdAndUpdate(req.params.id, {
                totalDuration: total,
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

      
        
    })


    app.get("/api/workouts/range", function(req, res){
        // sort('day',-1)
        Workout.find({}).then(allworkouts =>{
           
            console.log("api RANGE", allworkouts)  
            res.json(allworkouts)
            
        })
    })
}



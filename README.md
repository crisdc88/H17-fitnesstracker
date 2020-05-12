# H17-fitnesstracker

Thank you for viewing my application Fitness-Tracker

## Sumary

This application will allow you to create a workout and add different exercises to it so you can keep track of total duration of the workout, distance, weight lifted and other basic information.

## GettingStarted

Project Location

>[Project's GitHub repository](https://github.com/crisdc88/H17-fitnesstracker)

## Prerequisites

if you wnat to run this application on your local machine:

>1. Clone this git repository
>2. install Mongo db.
>3. open the terminal and go to the application folder.
>4. run comand npm i
>5. Change the db information in server.js file
>6. run command node server.js

## Built With

* Node js
* Mongo db
* Mongose
* Express js

## Deployed Link

>https://ct-fitness-tracker.herokuapp.com/

## Code-Snippets

The following is a small code-snippet of an API call which will show the execution of two queries.  The first query will return the value of the field totalDuration, which is needed to add the duration of the current exercise so it can be updated by the second query.
```sh

   Workout.findById(req.params.id).then( (record) => {
            //  console.log("total records by id in put:  " + record.totalDuration);
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

```

## Author

<img src="https://avatars.githubusercontent.com/u/61372364?" alt="avatar" style="border-radius:20px" width="30"/>

D. Cristina Terry

GitHub: [https://github.com/crisdc88/](https://github.com/crisdc88/),

LinkedIn: [www.linkedin.com/in/dcristinaterry](www.linkedin.com/in/dcristinaterry)

## License

![license](https://img.shields.io/badge/license-MIT-green)


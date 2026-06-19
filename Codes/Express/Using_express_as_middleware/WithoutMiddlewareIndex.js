const express = require("express");

const app = express();

function checkAge(age){
    if(age>=14) return true;
    return false;
}


app.get("/ride1", function(req, res){
    //if user goes to localhost:3000/ride1, then he can access codes here, and in this case can ride the ride 1, but we need to do some checks about his tickets and age before letting him access here, that we can do with making functions that return boolean value, and we can use those functions as middlewares, and if those functions return true, then user can access this code, otherwise not.

    if(checkAge(req.query.age)){
        res.json("This is ride 1, enjoy!!!!");
    } else {
        res.status(411).json("You are not old enough to ride this.");
    }
});

app.listen(3000);
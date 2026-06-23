const express = require("express");

const app = express();

function checkAge(age){
    if(age>=14) return true;
    return false;
}
function checkAgeMiddleware(req, res, next){
    const age = parseInt(req.query.age);
    if(age>=14) {
        next();
    }
    else{
        res.status(411).json("You are not old enough to ride this.");
    }
}

app.get("/ride1",checkAgeMiddleware, function(req, res){
    

    if(checkAge(req.query.age)){
        res.json("This is ride 1, enjoy!!!!");
    } else {
        res.status(411).json("You are not old enough to ride this.");
    }
});

app.listen(3000);

// check obsidian notes for middleware use.
// check obsidian notes for middleware use.
// check obsidian notes for middleware use.
// check obsidian notes for middleware use.
// check obsidian notes for middleware use.
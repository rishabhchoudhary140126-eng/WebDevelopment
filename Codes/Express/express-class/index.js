const express = require("express");

const app = express();

const users = [{
    name: "John",
    Kidney: [{
        healthy : false
    }, 
    {
        healthy : true
    }]
}];

app.use(express.json());
// we need to write logic that returns how many kidney of john s healthy or Not:


app.get("/", function(req, res){
    const johnKidney = users[0].Kidney;
    const noOfKidney = johnKidney.length;
    let noOfHealthyKidney = 0;
    for(let i=0; i<noOfKidney; i++){
        if(johnKidney[i].healthy) noOfHealthyKidney++;
    }
    let noOfunhealthyKidney = noOfKidney - noOfHealthyKidney;
    res.json({
        noOfKidney: noOfKidney,
        noOfHealthyKidney: noOfHealthyKidney,
        noOfunhealthyKidney: noOfunhealthyKidney
    });

})

//this was get endpoint, where user can get info about its kidney.

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].Kidney.push({
        healthy : isHealthy
    })
    res.json("Done!");
})

// this was post endpoint where user can add its kidney info from postman or other services

app.put("/", function(req, res){
    const johnKidney = users[0].Kidney;
    const noOfKidney = johnKidney.length;
    for(let i=0; i<noOfKidney; i++){
        users[0].Kidney[i].healthy = true;
    }
    res.json({});
})


app.delete("/", function(req, res){
    const johnKidney = users[0].Kidney;
    const noOfKidney = johnKidney.length;

    for(let i=0; i<noOfKidney; i++){
        if(users[0].Kidney[i].healthy === false){
            users[0].Kidney.splice(i, 1);
            i--;
        }
    }
    res.json({Done!});
});
app.listen(3000);

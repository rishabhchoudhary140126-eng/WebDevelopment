
```js
app.get("/ride1", function(req, res){
	res.json("This is ride 1, enjoy!!!!");
});


app.listen(3000);
```

if user goes to localhost:3000/ride1, then he can access codes here, and in this case can ride the ride 1, but we need to do some checks about his tickets and age before letting him access here, that we can do with making functions that return boolean value, and we can use those functions as middlewares, and if those functions return true, then user can access this code, otherwise not.

USING Functions for basic checks:
```js
function checkAge(age){

    if(age>=14) return true;

    return false;

}
app.get("/ride1", function(req, res){

    if(checkAge(req.query.age)){

        res.json("This is ride 1, enjoy!!!!");

    } else {
        res.status(411).json("You are not old enough to ride this.");
    }
});
```


# Using Middlewares

![[Pasted image 20260619020833.png]]


Express applications are a series of function calls, so we can write sequence of functions/middleware, with conditions and if condition satisfies it will move to next function. e.g.,

```js
function isOldEnoughMiddlewwware(req, res, next){
	const age = req.query.age;
	if(age>=14) next(); 
	else res.json("Not old enough");
}
//here next() value redirects code to next middleware.
function hasBoughtTicketMiddleware(req, res, next){
	const ticketNo = req.query.ticketNo;
	let ticketstatus = false;
	tickets = [2873, 2435, 245345, 24234, 2543, 24424];
	for(let i=0; i<tickets.lenght; i++){
		if(ticketNo === tickets[i]) ticketStatus = true;
	}
	if(ticketStatus) next();
	else res.json("Please enetr valid ticketNo.");
}


app.get("/", isOldEnoughMiddlewwware, hasBoughtTicketMiddleware, function(req, res){
	//any code to be executed if both conditions are true.
})
```

next() will send code to next middleware.


 Express is used for creating HTTP servers,
 ```js
const express = require("express");
const app = express();

app.get("/", function(req, res){

    res.send("Hi there");

})

  
app.listen(3000);
 ```
 Here in above code, we imported express, and is linked with app var.
 > app.get helps us descide where and what to do on specified port.
 
 > app.listen(3000);  runs server on port 3000
 
 > This server is responding the request by sending hi there.
 


# Getting input from URL, in our express code

localhost:3000/ will open our working express file shown ablve, and for passing values, we can modify this link as:

```url
localhost:3000/?n=3&a=2&b=3
```
our main url is still localhost:3000/, anything after ? is INPUTS
 > and to recieve it in our js, we do 
 > ```js
 > const n = req.query.n;
 > ```

### Example:
```js
const express = require("express");
const app = express();

  
function sum(n){

    let ans = 0;

    for (let i=1; i<=n; i++){

        ans = ans + i;

    }

    return ans;

}

  
app.get("/", function(req, res){

    //res.send("Hi there");

    const n = req.query.n;

    const ans = sum(n);

    res.send("Your ans is " + ans);

})

 app.listen(3000);
```

![[Pasted image 20260617212921.png]]

We can modify contents by using these methods.

# Using Post method to get data from user:

for taking input, we don't use query parameter, we use body parameter.

```js
const isHealthy = req.body.isHealthy;
```

![[Pasted image 20260618132642.png]]
Above code can recieve post requests and update data accordingly., to give post requests we use postman as:
![[Pasted image 20260618132736.png]]
#Note that res.json({}) at end is needed even if it is empty, else postman will never know if req is succeded or not.

# Using put method to replace existing data:

![[Pasted image 20260619011636.png]]

# Using delete method to remove data:
![[Pasted image 20260619011618.png]]

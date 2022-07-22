# **NodeJS Fundamentals**

## Express

### What is Express?


### Building simple http server

```javascript
    const express = require('express'); // ES6 syntax for importing from node_modules
    const app = express();

    // function .get() takes two inputs
    // Here '/' denotes url after localhost:${port}
    // eg. if listening to "port 3000" if we pass '/users' we can see output on url - localhost:3000/users 


    app.get('/',function(request,response){
        response.send("Hello World!!<br>Building my first server");
    })    // response shown on screen when we type url and hit enter

    const port = 3000; // declaring variable for port number. In general we should use ports between 3000 - 9000 range.

    // function .listen() takes two parameters
    // port number and
    // Error handling function
    app.listen(port, function(error){
        if(error==true){
            console.log("Some error occured")
        } else {
            console.log("Listening on localhost:"+port)
        }
    })
```

### Modules

Importing from modules in NodeJS

We created a file `message.js` and imported in our `app.js` as shown in following snippet.

```javascript
const express = require('express');
const app = express();
const message = require(./message.js); // importing of message.js

...

```

For exporting `message.js`

We use `module.exports` as shown following snippet

```javascript

module.exports = {
    // ...some data
}
```

### Routing in NodeJS

Routing means to handle what will happen if user enters a specific url relative to our application

    - eg. When we enter `www.facebook.com/users/mark+zukerberg` we may expect to see facebook page of Mark Zukerberg. OR if we enter `www.facebook.com/users/elon+musk` we may see facebook page of Elon Musk

- We can assume that facebook did not hardcoded html page for every single user.
- Instead they made a template page and added data for that specific user.
- eg. if a request to /users/john+doe was made, facebook will output data for John Doe and place it on template HTML page

### How routing works in Express js
 Simple routing eg.

```javascript
    app.get('/routing', function(req,res){
        res.send("This is simple routing");
    })
```

Dynamic routing syntax
```javascript
    app.get('/users/:name',function(req,res){
        // get data = get data for req["params"]["name"] through database

        res.send(data);
    })
```

For more refer documentation on `http://expressjs.com/en/starter/basic-routing.html`
Example repo with routing `https://github.com/Mohammadhunan97/mohammadhunan/blob/master/app.js`
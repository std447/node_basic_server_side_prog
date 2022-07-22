const express = require('express');
const app = express();
const message = require('./message.js');
let all_letters = '';

const port = 3000;

app.get('/',function(request,response){
    for (let i=0;i<message['letters'].length;i++){
        all_letters+=message['letters'][i] + "<br>"
    }
    response.send(all_letters);
})

app.listen(port,function(error){
    if(error){
        console.log("Error: ",error);
    } else console.log("Listening on localhost:"+port);
})


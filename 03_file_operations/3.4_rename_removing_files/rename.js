const http = require('node:http');
const fs = require('node:fs');

    fs.rename('./fileA.txt','fileD.txt',(err)=>{
        if(err){
            console.log("Some Error",err);
        } else console.log("File renamed successfully");
    });
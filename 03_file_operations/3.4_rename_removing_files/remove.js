const http = require('node:http');
const fs = require('node:fs');

fs.unlink('./fileD.txt',(err)=>{
    if(err){
        console.log("Error: ",err);
    }else {
        console.log("File deleted successfully");
    }
})
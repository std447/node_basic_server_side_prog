# File operations in NodeJS

<details>
<summary>Table of Contents</summary>

## Table of Contents

- [File operations in NodeJS](#file-operations-in-nodejs)
- [Table of contents](#table-of-contents)
- [Module03 Overview](#module03-overview)
    - [3.1 Http Module](#31-http-module)
        - [Install http module](#install-http-module)
        - [Run our server](#run-our-server)
        - [How it relates to an express server](#how-it-relates-to-an-express-server)
        - [Response and Request](#response-and-request)
    - [3.2 Reading Data from files](#32-reading-data-from-files)
        - [Install http and file-system modules](#install-http-and-file-system-modules)
        - [Request files through browser](#request-files-through-browser)
        - [Responding to requests through http module](#responding-to-requests-through-http-module)
    - [3.3 Writing and Updating files](#33-writing-and-updating-files)
        - [Using fs module to write to a file](#using-fs-module-to-write-to-a-file)
        - [File operations vs using a Database...](#file-operations-vs-using-a-database)
    - [3.4 Renaming and Removing files](#34-renaming-and-removing-files)
        - [Renaming file](#renaming-a-file-using-fs-module-rename-method)
        - [Removing file](#removing-a-file-using-fs-module-unlink-method)





</details>

## Module03 Overview

- Using http framework to create lightweight server without any frameworks
- Create, Read, Update, Delete operations with file.
- How NodeJS uses asynchronous programming to interact with files in lightning fast manner


## 3.1 HTTP module
### Install http module
    ```bash
    npm install http --save
    ```

### Run our server

```JS
    const http = require('http') //importing http module
    cosnt port = 3000;//declaring port number

    //create simple server
    http.createServer(function(request,response){

    }).listen(port,function(error){
        if(error){
            console.log('Error:',error);
        } else {
            console.log('Listening on localhost'+port);
        }
    })
```

### How it relates to an express server

  1. For creating server for simple tasks we don't need heavy framework such as Express.JS
  1. Instead we can use light-weight `http` module.
  1. Under the hood express uses http module to create its own server


### Response and Request

  

    - Clients always makes requests 
        - eg. Http page
        - file,etc.
    - Server responds with data requested by client

    - http module can listen to request and serve out response.   


## 3.2 Reading Data from files

### Install http and file-system modules

```PS
    npm install http --save-dev
    npm install file-system --save-dev
```



### Request files through browser

```JS
    // const http = require('http') -> this module is depreciated...
    const http = require('node:http'); // using inbuilt http server in node.

    // const _fs = require('file-system') -> @latest-"2.2.2" is giving vulnurability warning.
    
    const fs = require('node:fs') // having some known issues
    //  .readFile() and .readFileSync() when the path is a directory, the behavior of fs.readFileSync() is platform-specific.

    http.createServer(function(request,response){
        response.write(request['url']);
        response.end();
    }).listen(3000,function(err){
        if(err){
            console.log("Error:",err);
        } else {
            console.log("Listening on localhost:3000");
        }
    });
```

> Note:  For more info refer [this](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options) link.

<br>
<br>

### Responding to requests through http module

An example of serving out client requested files and error handling using `try{...} catch...` method.

```js
    const http = require('node:http'); // import inbuilt node http/1 module
    const fs = require('node:fs');// import inbuilt node file-system

    const port = 3000;

    // create simple http server 
    http.createServer((req,res)=>{
        //error handling using try{...} catch...
        try{
            let file = res.readFileSync('.' + req['url'] + '.txt','utf8');
            res.write(file)
        } catch(err){
            if(err){
                res.write("404. Error file not found");
            }
        }

        res.end(); // stop responding once task is completed
    }).listen(port); // listening on localhost:3000

```

- Using Node.JS we can serve clients asyncronously as well, so that client doesn't have to wait for response to be fulfilled before making more requests.


## 3.3 Writing and Updating files

### Using fs module to write to a file

```js
    const fs = require('node:fs');

    let fileA = fs.readFileSync('./fileA.txt','utf8');
    fs.writeFileSync('./fileA.txt',fileA + "This is update in fileA. ",'utf8');

```
We can use Node.JS inbuilt file-system module to create mini-applications, like scoring systems for games,etc.


### File operations vs using a Database...
|File System|Database|
|:---|:---|
|For making small quick application|For dealing with a lot of data.<br>eg. user account|
|For making small changes to a file.<br>eg. loading whole page of user accounts for each user<br>Caution: Its insecure method|Editing comparatively large files|


### Using browser to serve newly updated files

```js

```
## 3.4 Renaming and Removing files

### Renaming a file using fs module `.rename()` method

We may want to rename files in certain cases. Like we may want to rename file to a more appropriate name.
We can do this by using `.rename()` method.   
This command keeps all contents inside folder but changes file name (similar to renaming file using terminal command)

```js
 const fs = require('node:fs);

 fs.rename('oldFile.txt','newFile.txt',(err)=>{
    if(err){
        console.log('Error:',err);
    }else{
        console.log('File renamed successfully')
    }
 })
```



### Removing a file using fs module `.unlink()` method.
We may need to delete file under some circumstances...

```js
const fs = require('node:fs');

fs.unlink('./path/file.txt',(err)=>{
    if(err){
        console.log('Error:',err)
    }else{
        console.log('File deleted successfully');
    }
})
```



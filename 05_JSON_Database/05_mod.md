# JSON Databases

<details>
<summary>Table of Contents</summary>

## Table of Contents

- [JSON Databases](#json-databases)
- [Table of Contents](#table-of-contents)

</details>


## Module05 Overview

- Discover MongoDB API
- Create a collection
- Add Item to, update item form, read item from, and delete item from a collection

## 5.1 MongoDB API and JSON Databases

- Learn to handle our data effectively using a database
- Connect to MongoDB
- Compare MongoDB to a relational database system

### What is MongoDB
- MongoDB is a database system which uses JavaScript objects to handle data
- Unlike reading and writing to a file we can access specific items from a database.
- Using database is effective way for dealing with our information.
- We can encrypt or hide sensitive data.

### MongoDB vs Relational database? [in brief]
- In MongoDB each collection can have their own subobject
- eg. User accounts and user posts - 

    |Relational database|MongoDB|
    |:---|:---|  
    |In relational database we need to store user info and user post in separate tables |In MongoDB we have user collection which contains post object|

### Installing MongoDB - 

1. Node.JS 
    - Install using npm
        ```PS
        npm install mongodb --save-dev
        ```
    - `Mongo` variable 
    - Creating database
        ```JS
        Use `<database>` // this will create database if not already exist
        ```
    - Connecting using node
        ```JS
        const Mongo = require('mongodb');
        const MongoClient = Mongo.MongoClient;
        const url = 'mongodb://localhost:4000/myproject';

        MongoClient.connect(url, function(err,database){
            try{
                console.log('Connected to database server');
            }catch(err){
                console.log('Error:',err);
                }
            db.close();
        });
        ```

1. MongoDB form website
    [MongoDB]
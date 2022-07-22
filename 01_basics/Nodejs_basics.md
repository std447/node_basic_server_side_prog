# Server-side Programming language NodeJS

## Course goals
- Learning fundamentals of NodeJS
- Learning file operations using NodeJS
- Learning basics of ExpressJS
- Learning create, read, update and delete functionality with MongoDB
- Building an API
- Building full-stack application
- Deploying project to heroku

----

## Module01 **NodeJS fundamentals**

### Q. What is NodeJS? Relation to G-chrome's V8 engine?
Ans. NodeJS is runtime environment that hooks into G-Chromes V8 engine and allows us to write JS code for server-side tasks.   
    It's not a framework or a Language.   
    Written in C++
    Performance efficient for real-time applications  
    High level - it converts JS -> C++ -> Machine level Lang  

### Q. How NodeJS works?  
A. NodeJS uses an event-driven non-IO blocking model to run applications.  
i.e. Requests are made async fashion  
Do not block or slow down program  
We can make as many requests as we want without having to wait for response they automatically gets handled.

### Q. What can we do with NodeJS?  
A. Make use of sockets to make powerful real-time applicaitons (p2p games, real-time applications)  
Connect and interact with database.  
File operations writing into, reading from, updating or deleting files.   


## Useful commands for CLI - 

> ### CLI - Command Line Interface
>> Way of interacting with computer programs, using purely text or character based Interface.  
ex. CMD, bash, Windows Powershell, etc.

Some useful commands -  
<span style="font-size: 16px;color:lime;font-style:italic;font-weight:600"> Use as well in Windows Powershell </span>


|Command|Usage|
|:---|:-------|
| `cd [directoryname]`| Enter into specified directory name |
| `rm [filename]` | Delete specified file|
| `Remove-Item [directoryname] -Recurse` | Remove a folder.<br> Use `-Recurse` when directory is not empty |
| `mv [directoryname/filename] [newlocation]` | Move directory or file to a different location.<br>Can be used to rename directory or filename.|
|`mkdir [directoryname]`| Create directory with specified name|
|`pwd`| Returns path of current directory<br>Similar to `Get-Location` in powershell|
|`touch` alternative<br>`echo "" >> [filename]`|Write and append to file. Creates if file not exist|
|`ls`|See whats inside a directory<br>Similar to `dir` in CMD or<br>`Get-ChildItem` in Powershell|



## Git Basics

Q. What is git?  
A. Git is version control system helps to manage our code.<br>
Installs and repos locally so that you can edit and alter your team's code easily on your device and keep track of who's done what.<br>
Using git you can easily roll back to a previous version if some error in latest version or if you decided so.














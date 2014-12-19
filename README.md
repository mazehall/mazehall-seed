#mazehall seed

An example application for the mazehall package. Demonstrates the module development and some aspects of build.

## Project guidelines

* Keep it local with npm
* Use the speed of gulp
* Bower is your Frontend friend
* Keep an eye on server startup time
* Docker it with environment vars

## Install

```
    npm install
    npm run build
```

## Start

Npm settings from package.json are using `forever` to manage this jobs.

```
    npm start
```
    * start the server as daemon with logging in ~/.forever/*.log
    
```
    npm run server
```
    * start server script with blocking shell but console output
    
```
    npm stop
```
    * stop the script
    
## Update non development environment

```
    npm run build
```


     
 
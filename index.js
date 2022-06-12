const categoryRoutes = require("./routes/categories.route") ;
require("./configs/server.config") ;
const express = require('express');
const app = express() ;

const port = process.env.PORT || 3001 ; // what is "process" : global variable/object having info of current process 
                                        // i guess nodeJS 
// module : GLOBAL variable having info of all module and data 

categoryRoutes(app) ;

app.get("/" , function(req , res){
    console.log("here is the home") ;
    res.send("home") ;
}) ;

app.listen(port , function(req , res){
    console.log("here is the express, started at port : " , port) ;
});
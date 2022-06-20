const categoryRoutes = require("./routes/categories.route") ;
const productsRoute = require("./routes/products.routes") ;
const authRoutes = require("./routes/user.routes") ;
require("./config/server.config") ;
const express = require('express');
const bodyParser = require('body-parser');
const app = express() ;

const port = process.env.PORT || 3001 ; // what is "process" : global variable/object having info of current process 
                                        // i guess nodeJS 
// module : GLOBAL variable having info of all module and data 

// MIDDLE WARE SECTION FOR ALL THE APIs
app.use(bodyParser.urlencoded({extended: true})) ;
app.use(bodyParser.json()) ;

categoryRoutes(app) ;
productsRoute(app) ;
authRoutes(app) ;

app.get("/" , function(req , res){
    console.log("here is the home") ;
    res.send("home") ;
}) ;

app.listen(port , function(req , res){
    console.log("here is the express, started at port : " , port) ;
});
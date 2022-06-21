const AuthController = require("../controller/auth.controller") ;

const routes = (app) => {
    app.post("/ecomm/v1/api/signup" , AuthController.signUp) ;
    app.post("/ecomm/v1/api/signin" , AuthController.signIn) ;
}

module.exports = routes ;
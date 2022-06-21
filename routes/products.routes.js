const products = require("../controller/products.controller") ;
const auth = require("../middlewares/authValidation") ;
const route = (app) => {
    app.get("/ecomm/api/v1/products" ,  products.getAllProducts) ;
    app.post("/ecomm/api/v1/products" , auth.isAuthenticated , products.createPost) ;
}

module.exports = route ;
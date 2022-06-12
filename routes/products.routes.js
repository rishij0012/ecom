const products = require("../controller/products.controller") ;
const route = (app) => {
    app.get("/ecomm/api/v1/products" , products.getAllProducts) ;
    app.post("/ecomm/api/v1/products" , products.createPost) ;
}

module.exports = route ;
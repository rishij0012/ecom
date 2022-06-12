const { getCategories , createCategories } = require("../controller/categories.controller") ;

const routes = (app) => {
    app.get("/ecomm/api/v1/categories" , getCategories) ;
    app.post("/ecomm/api/v1/categories",createCategories) ;
}

module.exports = routes ;
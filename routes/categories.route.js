const { getCategories , createCategories, deleteCategories , getCategoryById , updateCategories} = require("../controller/categories.controller") ;

const validation = require("../middlewares/validations") ;

const routes = (app) => {
    app.get("/ecomm/api/v1/categories" , getCategories ) ;
    app.post("/ecomm/api/v1/categories", validation.validateCategoryCreation , createCategories ) ;
    app.delete("/ecomm/api/v1/categories" , deleteCategories ) ;
    app.get("/ecomm/api/v1/categories/:id" , getCategoryById ) ;
    app.put("/ecomm/api/v1/categories/:id" , updateCategories ) ;
}

module.exports = routes ;
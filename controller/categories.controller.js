const { 
    getAllCategories , 
    createCategory , 
    deleteCategory , 
    getSpecificCategoryById ,
    updateCategory
} = require("../services/category.service") ;

const getCategories = async function(req ,res){
    const response = await getAllCategories() ;
    res.json({
        "message": "success " ,
        data: response ,
        status: 200 
    });
}

const  createCategories = async function(req ,res){
    console.log(req.body) ;
    const response = await createCategory(req.body) ;
    res.json({
        message: "category created" ,
        success: 201 ,
        data: response 
    }) ;
}

// localhost:3000/ecomm/api/v1/categories?id=2 : passing id in query params
const deleteCategories = async (req , res) => {
    id = req.query.id ; 
    const response = await deleteCategory(id) ;
    res.json({
        message: "successfully deleted "+id ,
        status: 200 ,
        data: response 
    })
}

const getCategoryById = async (req , res) => {
    id = req.params.id ;
    const response = await getSpecificCategoryById(id) ;
    res.json({
        "message": "category Found" ,
        status: 200 ,
        data: response ,
    });
}

const updateCategories = async (req , res ) => {
    id = req.params.id ;
    data = req.body ;
    const response = await updateCategory(id , data) ;  // here a;so we get pending promise and to wait till resolved 
    res.json({
        "message": "category Found , and updated " ,
        status: 201 ,
        data: response ,
    });
}

module.exports = {
    getCategories ,
    createCategories ,
    deleteCategories ,
    getCategoryById ,
    updateCategories ,
}
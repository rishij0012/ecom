const productService = require("../services/products.services") ;

const getAllProducts = async (req , res) => {
    const allProducts = await productService.getProducts() ;
    res.json({
        message: "all products are listed." ,
        status: 200 ,
        data: allProducts 
    });
}

const createPost = async (req , res) => {
    const productDetails = req.body ;
    const response = await productService.createPost(productDetails) ;
    if(response){
        res.json({
            message: "product has been created successfully !" ,
            status: 201 ,
            data: response ,
        })
    }
}

module.exports = {
    getAllProducts ,
    createPost ,
}
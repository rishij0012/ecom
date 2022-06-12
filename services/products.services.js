const Products = require("../models/index").products ;
const Categories = require("../models/index").categories ;

const getProducts = async () => {
    const allProducts = await Products.findAll({include: Categories}) ;
    return allProducts ;
}

const createPost = async (productDetails) => {
    const response = await Products.create({
        name: productDetails.name ,
        cost: productDetails.cost ,
        description: productDetails.cost ,
        category_id: productDetails.category_id 
    })
    return response ;
}

module.exports = {
    getProducts ,
    createPost ,
}
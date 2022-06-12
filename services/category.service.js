const Categories = require("../models/index").categories ;

const getAllCategories = async () => {
    let categories = []
    try{
        categories = await Categories.findAll() ;
    }catch(e){
        console.log(e)
    }
    return categories ;
}

const createCategory = async (data) => {
    console.log(data , " controller here") ;
    const newCategory = await Categories.create({
                            name: data.name ,
                            description: data.description ,
                            createAt: new Date() ,
                            updatedAt: new Date() 
                        }) ;
    return newCategory ;
}

const deleteCategory = async (categoryId) => {
    const deleteCategory = await Categories.destroy({
        where:{id:categoryId}
    })
    return deleteCategory ;
}

const getSpecificCategoryById = async (categoryId) => {
    const category = await Categories.findByPk (categoryId) ;
    return category ;
}

const updateCategory = async (categoryId , categoryData) => {
    const category = await Categories.findByPk(categoryId) ;
    if(category){
        category.update({
            name: categoryData.name ,
            description: categoryData.description ,
            updatedAt: new Date() ,
        })
    }
    return category ;
}

module.exports = {
    getAllCategories ,
    createCategory ,
    deleteCategory , 
    getSpecificCategoryById ,
    updateCategory ,
}
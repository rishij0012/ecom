const getCategories = function(req ,res){
    console.log("get Categories !") ;
    res.send({
        message: "here is the categories !" ,
        success: 200 ,
        data: {
            "category": "electronics " ,
            "description": "sample descripttion " ,
        }
    })
}

const  createCategories = function(req ,res){
    console.log("Create Categories !") ;
    res.send({
        message: "here is the categories !" ,
        success: 200 ,
        data: {
            "category": "electronics " ,
            "description": "sample descripttion " ,
        }
    })
}

module.exports = {
    getCategories ,
    createCategories ,
}
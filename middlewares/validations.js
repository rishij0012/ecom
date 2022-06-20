const validateCategoryCreation = function(req , res , next){
    console.log(req.body.name) ;
    if(!req.body.name){
        res.json({
            message: "validation error ! , body not found ." ,
            success: 400 ,
        }) ;
        console.log("check here for validation ") ;
        return ;
    }
    next() ;
};

module.exports = {
    validateCategoryCreation ,
}
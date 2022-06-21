const Auth = require("../services/auth.services") ;

const isAuthenticated = function(req , res , next){
    const token = req.headers["x-access-token"]
    if(!token){
        return res.json({
            message: "no token provided " ,
            status: 403 ,
        });
    }
    const resp = Auth.verifyToken(token) ;
    if(!resp){
        return res.json({
            status: 403 ,
            message: "token not varified " ,
        });
    }
    try{
        const user = Auth.getUser(resp.email) ;
        req.user = user.id ;    // here i will user in other section of code 
    }catch(err){
        console.log(err) ;
        return res.json({
            status: 401 ,
            message: "user not found" ,
        });
    }
    next() ;
}

module.exports = {
    isAuthenticated ,
}
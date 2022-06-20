const auth = require("../services/auth.services") ;

const signUp = async function(req , res){
    const user = await auth.signUp(req.body) ;
    console.log(user) ;
    if(!user.email){
        return res.json({
            message: " Unable to create the user " ,
            status: 400 ,
        });
    }
    return res.json({
        message: " successfully created the user " ,
        status: 201 ,
        data: user ,
    })
}

module.exports = {
    signUp ,
}
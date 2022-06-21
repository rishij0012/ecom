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

const signIn = async function(req , res){
    const user = await auth.getUser(req.body.email) ;
    if(!user){
        return res.json({
            status: 404 ,
            success: false ,
            message: "unable to find the user account" ,
        });
    }

    if(!auth.checkPassword(req.body.password , user.password)){
        return res.json({
            status: 404 ,
            success: false ,
            message: "Incorrect password" ,
        });
    }
    const token = auth.createToken(user) ;
    return res.json({
        status: 200 ,
        success: true ,
        message: "successfully logedIn to System" ,
        data: token ,
    });
}

module.exports = {
    signUp ,
    signIn ,
}
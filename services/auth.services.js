const Users = require("../models/index").User ;

const signUp = async (data) => {
    console.log(Users) ;
    try{
        const user  = await Users.create({
            email: data.email ,
            password: data.password ,
        }) ;
        return user ;
        
    }catch(e){
        console.log(e) ;
        return {} ;
    }
}

module.exports = {
    signUp ,
}
const Users = require("../models/index").User ;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
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

const getUser = async function(email){
    const user = await Users.findOne({
        where:{
            email: email ,
        }
    })
    return user ;
}

const checkPassword = function(requstedPassword , DbPassword){
    return bcrypt.compareSync(requstedPassword , DbPassword) ;
}

const createToken = function(user) {
    return jwt.sign(user.dataValues , "secretKetString" , { expiresIn: 60 * 60 }) ;
}

// console.log(createToken({dataValues:{id: 11 , email: "rajris@gmail.com"}}))

const verifyToken = function(token){
    try {
        const resp = jwt.verify(token ,  "secretKetString" ) ;
        return resp ;
    } catch (error) {
        console.log(error) ;
    }
}

module.exports = {
    signUp ,
    getUser ,
    checkPassword ,
    createToken ,
    verifyToken ,
}
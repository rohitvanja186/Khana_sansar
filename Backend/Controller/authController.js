const { users } = require("../Model/Index")
const bcrypt = require("bcrypt")

exports.register = async (req,res)=>{

    const{Username,Email,Password} = req.body
    try {
        const checkEmail = await users.findAll({
            where :{
                Email : Email
            }
        })
    if(checkEmail.length > 0) {
        res.send("exists")
        console.log("email already exist")
    }else{
        await users.create({
            Email : Email,
            Password : bcrypt.hashSync(Password, 10),
            UserName : Username
        })
        res.send("success")
        console.log("User registered successfully")
    }
    } catch (error) {
        console.error(error)
    }

   



}


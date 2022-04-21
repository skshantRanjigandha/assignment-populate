const  userModel = require('../models/userModel.js');

const jwt = require ('jsonwebtoken')


const createUser = async function (req, res) {
let data =req.body
let SavedData = await userModel.create(data)
res.send({msg: SavedData})

}



const loginUser = async function (req, res) {
    let username =req.body.emailId
    let password =req.body.password
    let user = await userModel.findOne({emailId: username, password: password})

    if(!user) return res.send({status:false,msg:"username and password is not correct"})

    let token = jwt.sign({userId: user._id.toString(), batch: "uranium", organisation: "functionup",}, "functionup-uranium");

    res.send({status:true ,data :token});
    
    };
    
    const getUserdata = async function (req, res) {



        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
          return res.send({ status: false, msg: "No such user exists" });
      
        res.send({ status: true, data: userDetails });
      

       let token = req.headers["x-auth-token"];
        if(!token) token = req.headers["x-auth-token"]
        if (!token)
         return
         res.send({ status: false, msg: "token must be present" });
        console.log(token)

        
        
        let decodedToken = jwt.verify(token, "functionup-uranium");
   
         if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });


    }

    module.exports.createUser = createUser
    module.exports.loginUser = loginUser  
    module.exports.getUserdata = getUserdata
   
const  userModel = require('../models/userModel.js');

const jwt = require ('jsonwebtoken')


const createUser = async function (req, res) {
try{

  let data =req.body
  if(Object.keys(data).length !=0){
let SavedData = await userModel.create(data)
res.status(201).send({msg: SavedData})
  }
else res.status(404).send({msg:'BAD REQUEST'})

let properties = Object.keys(data).length
console.log(properties)

res.status(500).send({msg:'ERROR',error:err.message})

}
catch(err){

  console.error("this is an error",err.message)
  res.status(500).send({msg: "error", error:err.message})
}

}
const loginUser = async function (req, res) {
    let userName =req.body.emailId
    let password =req.body.password
    let user = await userModel.findOne({emailId: userName, password: password})

    if(!user){
     return res.send({status:false,msg:"username and password is not correct"})
    }
   // res.send({ status: true, data: user});
  
    let token = jwt.sign({userId: user._id.toString(), batch: "uranium", organisation: "functionup",}, "functionup-uranium");

    res.send({status:true ,data :token});
    
    };
    
    const getUserdata = async function (req, res) {

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

    const updateUser = async function (req, res) {
        // Do the same steps here:
        // Check if the token is present
        // Check if the token present is a valid token
        // Return a different error message in both these cases
        
          let userId = req.params.userId;
          let user = await userModel.findById(userId);
          //Return an error if no user with the given id exists in the db
          if (!user) {
            return res.send("No such user exists")
          }
          let userData = req.body;
          let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
          res.send({ status: updatedUser, data: updatedUser });
        };
        


        
          

    module.exports.createUser = createUser
    module.exports.loginUser = loginUser  
    module.exports.getUserdata = getUserdata
   module.exports.updateUser = updateUser

  
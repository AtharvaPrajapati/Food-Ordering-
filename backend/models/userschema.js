const mongoose=require('mongoose');



const user=new mongoose.Schema({
name:{
    required:true,
    type:String
},
lastname:{
    required:true,
    type:String
},email:{
    required:true,
    type:String
},
password:{
    required:true,
    type:String
},confirmPassword:{
    required:true,
    type:String
},
role:{
  type:String,
  enum:["user","owner","delivery"],
  required:true
}


})

const User=mongoose.model('User',user);
module.exports=User;
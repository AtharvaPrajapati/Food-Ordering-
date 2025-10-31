const User=require('../models/userschema')
const brcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config();


exports.userRegistration=async(req,res)=>{
    try{
        const { name, lastname, email, password, confirmPassword, role } = req.body;

    // Check if all fields are filled
    if (!name || !lastname || !email || !password || !confirmPassword || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }


   // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

   const newUser = new User({
      name,
      lastname,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      role,
    });

    await newUser.save();


    res.status(201).json({
        message:"user created successfully",
        success:true,
    })
    
    }catch(Error){
        console.log(Error)
        res.status(500).json({
            success:true,
            message:"Error while creating the user"
        })

    }
}


exports.login=async(req,res)=>{
try{
         const { email, password } = req.body;
  if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

        const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found  Please Register first and then login' });
    }
    
    const isMatch=await brcrypt.campare(password,user.password);
    if(! isMatch){
        return res.status(500).json({
        success:false,
        message:"Password is incorrect please enter the correct password"
        
    }) 

}


const payload={
    id:user.id,
    role:user.role,
    email:user.email
}

    const cookie=jwt.sign(payload,process.env.JWT_SECERT,{expiresIn:'1h'})
    res.cookie('token',cookie)
    res.status(200).json({
        success:true,
        message:"User logged in successfully",
        user:user
    })
    
}
catch(error){
    console.log("Error while logging the user")
    console.log(error)
}


    }



exports.signOut=async(req,res)=>{
    try{
      res.clearCookie('token')
      res.status(200).json({
        success:true,
        message:"User logged out successfully",
    })
      


    }catch(Error){
        console.log("Error while logout the user")

    }
}

exports.getalluser=async(req,res)=>{
    try{




    }catch(Error){

        

    }
}
    
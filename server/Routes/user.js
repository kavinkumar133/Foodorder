const mongoose=require("mongoose")
const express=require("express")
const User=require("../model/SignupModel")

const router=express.Router()

router.post("/signup",(req,res)=>{
     const {name,email,mobilenumber,password}=req.body
     const user=new User({
         name,
         email,
         mobilenumber,
         password
     })
     user.save().then(()=>{
         res.send("User Registered Successfully")
     }).catch((err)=>{
         res.send(err)
     })   
})

router.post("/signin",async (req,res)=>{
    const {name,password}=req.body
    const user=await User.findOne({name,password})
    if(user){
        res.send("Login")
    }
    res.send("Not Login")
})

module.exports=router
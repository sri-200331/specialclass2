const Student=require('../models/Student')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const register=async(req,res)=>{
    try{
        const{name,email,password}=req.body

        const StudentExist=await Student.findOne({email})
        
        if(StudentExist){
            return res.status(400).json({message:"email already exists"})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const user= await Student.create(
            {
                name,
                email,
                password:hashedPassword
            }
        )

        res.status(201).json({
            message:'Registration successfully'
        })

    }catch(err){
        res.status(500).json({message:err.message})
    }
}



const login=async(req,res)=>{
    try{
        const{email,password}=req.body
        
        const studentl=await Student.findOne({email})

        if(!studentl){
            return res.status(400).json({
                message:"invalid email"
            })
        }
    }
} 
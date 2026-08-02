const Student=require('../models/Student')

const getStudent=async(req,res)=>{
    try{
        const students=await Student.find()
        res.json(students)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

const addStudent=async(req,res)=>{
    try{
        const student=new Student(req.body)
        const savedStudent=await student.save()

        res.status(201).json(savedStudent)
    }catch(err){
        res.status(500).json({message:err.message})

    }
}

const updateStudent=async(req,res)=>{
    try{
        const updatedStudent=await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,
            runValidators:true}

        )
        if (!updatedStudent) {
              return res.status(404).json({ message: "Student not found" });
        }

        res.json(updatedStudent)
    }catch(err){
        res.status(500).json({mesage:err.message})
    }
}

const deleteStudent=async(req,res)=>{
    try{
        await Student.findByIdAndDelete(req.params.id)

        res.json({message:'Student deleted successfully'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}


module.exports={
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
}
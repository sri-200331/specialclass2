import { useState } from "react"

function Attendance(){
  
     const[students,setStudents]=useState([
         { name: "Manu", isPresent: false },
         { name: "Banu", isPresent: false },
     ])
     

     function handleClick(index){
       let updatedStudents=[...students]

       updatedStudents[index].isPresent=!updatedStudents[index].isPresent

       setStudents(updatedStudents)

     }
    return(
        <>
        <h1>Attendance</h1>
        <ul>
            {students.map((student,index)=>(
               <div key={index}>
                <span>{student.name}</span>

                <button onClick={()=>handleClick(index)}  style={{backgroundColor:student.isPresent?'green':'red'}}> 
                        {student.isPresent?'Present':'absent'}
                </button>

               </div>
            ))
            }
        </ul>
        </>
    )
}
export default Attendance
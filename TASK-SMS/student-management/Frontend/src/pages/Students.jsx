import Navbar from "../components/Navbar"
import StudentCard from "../components/StudentCard"
import SearchBar from "../components/SearchBar"
import { useState } from "react";

function Students(){
    const [search,setSearch]=useState("")
     const students = [
    {
      name: "Thanvi S",
      email: "thanvi@gmail.com",
      course: "Python",
      city: "Chennai",
    },
    {
      name: "Nithya B",
      email: "nithya@gmail.com",
      course: "Dotnet",
      city: "Chennai",
    },
    {
      name: "Vinothini",
      email: "vino@gmail.com",
      course: "React",
      city: "Madurai",
    },
    {
      name: "Boominathan",
      email: "boomi@gmail.com",
      course: "Node JS",
      city: "Salem",
    },
    {
        name: "Bharathi",
      email: "bharathi@gmail.com",
      course: "MySQL",
      city: "Trichy", 
    },
    {
         name: "Poomani",
      email: "Mani@gmail.com",
      course: "Java",
      city: "Thanjavur",
    }
  ];

    const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.course.toLowerCase().includes(search.toLowerCase())
  );


    
    return(
        <>
        <Navbar/>
        <SearchBar search={search} setSearch={setSearch}/>
        <div className="student-container">
                {filteredStudents.map((student) => (
                         <StudentCard key={student.id} student={student} />
                ))
                }
        </div>

        </>
    )
}
export default Students
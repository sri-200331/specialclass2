function StudentCard({student}){
    return(
        <>
        <div className="student-card">
            <div className="avatar">

                👨‍🎓
            </div>
            <h2>{student.name}</h2>
            <p>📧 {student.email} </p>
            <p>📚 {student.course}</p>
            <p>📍 {student.city}</p>
            <div className="card-buttons">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>



        </div>
        </>
    )
}
export default StudentCard
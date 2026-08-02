import Navbar from "../components/Navbar"

function AddStudent(){
    return(
        <>
        <Navbar/>
        <form action="">
            <h2>Add Student</h2>

            <input type="text"  placeholder="Student name"/>
            <input type="email" placeholder="email" />
            <input type="text" placeholder="course" />
            <button>Add Student</button>
        </form>
        </>
    )
}
export default AddStudent
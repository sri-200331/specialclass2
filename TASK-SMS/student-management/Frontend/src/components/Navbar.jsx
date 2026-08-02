import {Link} from "react-router-dom"

function Navbar(){
    return(
        <>
        <nav>
        <h1>SMS</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/add">Add Student</Link></li>
        </ul>
        </nav>
        </>
    )
}
export default Navbar
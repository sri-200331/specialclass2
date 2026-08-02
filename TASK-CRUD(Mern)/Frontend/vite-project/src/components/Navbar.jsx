import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">Product Admin</div>
            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/add-product">Add Products</Link>
            </div>
        </nav>
    )
}
export default Navbar
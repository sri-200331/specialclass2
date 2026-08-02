import { useNavigate } from "react-router-dom"
import DashboardCards from "../components/DashboardCards"
import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"

function Home(){

    const navigate=useNavigate()

    return(
        <>
        <Navbar/>

        <section className="hero">
            <h1>🎓 Student Hub</h1>
            <p>Manage Student Records Efficiently</p>
            <button className="hero-btn" onClick={()=>navigate('/add')}>Add Student</button>
        </section>
                
        <DashboardCards/>

        {/* <Footer/> */}


        

        </>
    )
}
export default Home
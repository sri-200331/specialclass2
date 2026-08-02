import {FaGithub, FaLinkedin} from 'react-icons'
function Footer(){
    return(
        <>
        <footer className="footer">
            <h2>🎓 Student Hub</h2>
            <p>Built using React • Express • MongoDB • Node.js</p>
            <div className="footer-icons">
            
                    {/* <FaGithub /> */}
                    {/* <FaLinkedin /> */}
            </div>
             <p className="copy">
                 © 2026 Student Management System | All Rights Reserved
             </p>

        </footer>
        </>
    )
}
export default Footer
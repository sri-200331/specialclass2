import Navbar from "../components/Navbar"

function EditStudent(){
    return(
        <>
        <Navbar/>

        <form action="">
            <h2>Edit student</h2>

            <input type="text" />
            <input type="email" />
            <input type="text" />
            <button>Update</button>
        </form>
        </>
    )
}
export default EditStudent
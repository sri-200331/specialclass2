import { useState } from "react"

function Dropdown(){
    const[veg,setVeg]=useState("")
    return(
        <>
        <select value={veg} onChange={(e)=>setVeg(e.target.value)}>
                <option value="">Select the veg</option>
                <option value="Potato">Potato</option>
                <option value="Tomato">Tomato</option>
        </select>
        </>
    )
}
export default Dropdown
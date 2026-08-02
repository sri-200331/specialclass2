import { useState } from "react"

function HideandShow(){
    const[show,setShow]=useState(true)
    function handleClick(){
        setShow(!show)
    }
    return(
        <>
        <button onClick={handleClick}>show</button>
        {show && <p>hello</p>}
        </>
    )
}
export default HideandShow
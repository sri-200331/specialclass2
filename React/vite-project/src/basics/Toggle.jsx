import { useState } from "react"

function Toggle(){
    const[btn,setBtn]=useState("hello")
    function handleClick(){
        setBtn(btn==="hello"?"hii":"hello")
    }
    return(
        <>
        <button  onClick={handleClick}>Toggle</button>
        {btn}
        </>
    )
}
export default Toggle
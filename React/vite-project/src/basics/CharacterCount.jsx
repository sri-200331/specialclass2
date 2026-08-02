import { useState } from "react"

function CharacterCount(){
    const [count,setCount]=useState("")
    return(
        <>
        <input type="text" placeholder="type something..."
        value={count} onChange={(e)=>setCount(e.target.value)} />
        {count.length}
        </>
    )
}
export default CharacterCount
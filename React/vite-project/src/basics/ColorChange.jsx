import { useState } from "react"

function ColorChange(){
    const[color,setColor]=useState('white')
    return(
        <div style={{backgroundColor:color, width:"100%",height:"100%"}}>
            <button onClick={()=>setColor("Red")}>Red</button>
            <button onClick={()=>setColor("Green")}>Green</button>
            <button onClick={()=>setColor("Pink")}>Pink</button>

        </div>
    )
}
export default ColorChange
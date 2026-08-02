import { useState } from "react"

function List(){
    const Fruits=["apple","orange","banana"]
    const[fruit,setFruit]=useState(Fruits)
    return(
        <>
        {fruit.map((item,index)=>(
            <p key={index}>{item}</p>
        ))}
        </>
    )
}
export default List
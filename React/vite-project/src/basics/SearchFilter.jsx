import { useState } from "react"

const Products=["Apple","Orange","Banana"]
function SearchFilter(){
    const[search,setSearch]=useState("")

    const Filtered=Products.filter(p=>p.toLowerCase().includes(search.toLowerCase))
    return(
        <>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        {Filtered.map((index,item)=>(
            <p key={index}>{item}</p>
        ))}
        </>
    )
}
export default SearchFilter
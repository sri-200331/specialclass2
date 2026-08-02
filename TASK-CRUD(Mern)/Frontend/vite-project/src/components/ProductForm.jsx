import { useEffect, useState } from "react"

function ProductForm({onSubmit,editingProduct}){
    const[formData,setFormData]=useState({
        name:"",
        price:"",
        category:"",
        stock:"",
        imageUrl:""

    })

    const[error,setError]=useState("")

    useEffect(()=>{
        if(editingProduct){
            setFormData({
                name:editingProduct.name,
                price:editingProduct.price,
                category:editingProduct.category,
                stock:editingProduct.stock,
                imageUrl:editingProduct.imageUrl
            })
        }

    },[editingProduct])


    const handleChange=(e)=>{
        const {name,value}=e.target

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(
            !formData.name||
            !formData.price||
            !formData.category||
            formData.stock===""||
            !formData.imageUrl

        ){
            setError("all fields are required")
            return
        }

        if(Number(formData.stock)<0){
            setError("stock cannot be negative")
            return
        }
        
        if(Number(formData.price)<0){
            setError("price cannnot be negative")
            return
        }

        setError("")

        onSubmit({
            ...formData,
            stock:Number(formData.stock),
            price:Number(formData.price)
        })

        if(!editingProduct){
            setFormData({
                name:"",
                price:"",
                category:"",
                stock:"",
                imageUrl:""
            })
        }
    }
    return(
        <>
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>{editingProduct?"update product":"add new product"}</h2>

            {error &&  <p className="error">{error}</p> }

            <input type="text"
             name="name"   value={formData.name}
             onChange={handleChange}   placeholder=" product name" />

            <input type="number" 
            name="price" value={formData.price}
             onChange={handleChange} placeholder="enter the price" />

            <input type="text"
            name="category" value={formData.category}
             onChange={handleChange} placeholder="enter the category" />

            <input type="text"
            name="stock" value={formData.stock}
            onChange={handleChange} placeholder="stock status" />

            <input type="text"
            name="imageUrl" value={formData.imageUrl}
            onChange={handleChange} placeholder="image" />
            
            <button type="submit">{editingProduct?"update product":"add product"}</button>
        </form>
        </>
    )
}
export default ProductForm
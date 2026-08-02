import { useEffect, useState } from "react"
import ProductForm from "../components/ProductForm"
import ProductTable from "../components/ProductTable"

import { getProduct,createProduct,updateProduct,deleteProduct } from "../services/ProductApi"

function Dashboard(){
    const[products,setProducts]=useState([])
    const[editingProduct,setEditingProduct]=useState(null)
    const[loading,setLoading]=useState(true)


    const fetchProducts=async()=>{
        try{
            const response=await getProduct()
            setProducts(response.data)
            
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    const handleSubmit=async(productData)=>{
        try{
            if(editingProduct){
                await updateProduct(editingProduct._id,productData)
                alert('product updated successfully')
                setEditingProduct(null)
            }else{
                await createProduct(productData)
                alert('product added successfully')
            }
            fetchProducts()
        }catch(error){
            console.log(error.response?.data)
        }


    }


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      alert("Product deleted successfully");

      fetchProducts();
    } catch (error) {
      alert("Delete failed");
    }
  };

  const totalProducts=products.length

  const inStockProducts=products.filter((product)=>product.stock>0).length

  const outStockProducts=products.filter((product)=>product.stock===0).length

  if(loading){
    return <h2 className="loading">...loading</h2>
  }
    return(
        <main className="dashboard">
        <div className="dashboard-header">
            <div>
            <h1>Dashboard</h1>
            <p>Manage your products easily</p>
            </div>
        </div>

        <div className="stats">
            <div className="stat-card">
                <h3>Total Products</h3>
                <h2>{totalProducts}</h2>
            </div>

            <div className="stat-card">
                <h3>Out of Stock</h3>
                <h2>{outStockProducts}</h2>
            </div>
            <div className="stat-card">
                <h3>In stock</h3>
                <h2>{inStockProducts}</h2>
            </div>
        </div>

        {/* <ProductForm  onSubmit={handleSubmit} editingProduct={editingProduct}/> */}
        <ProductTable products={products} onDelete={handleDelete} onEdit={setEditingProduct}/>
        
        </main>
    )
}
export default Dashboard
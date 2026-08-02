import {Link} from "react-router-dom"
function ProductTable({products,onDelete,onEdit}){
    return(
        <>
        <div className="table-container">
            <h2>Product List</h2>

            {products.length===0? ( <p className="empty">No products available</p> ):( 

        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product._id}>
                        <td>
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                        </td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.stock}</td>
                        <td>
                            {product.stock===0?
                            ( <span className="out-stock">Out of stock</span> ):
                            ( <span className="in-stock">In stock</span> )

                            }
                        </td>
                        <td className="actions">
                            <Link to={`/product/${product._id}`}>
                                <button className="view-btn">View</button>
                            </Link>

                            <button className="edit-btn" onClick={()=>onEdit(product)}>Edit</button>

                            <button className="delete-btn" onClick={()=>onDelete(product._id)}>Delete</button>
                            
                        </td>

                    </tr>
                )
            )}
            </tbody>
        </table>
            )}
        </div>
        </>
    )
}
export default ProductTable
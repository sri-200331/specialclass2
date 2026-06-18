import { useState } from "react"

function Cart(){
    const[products,setProducts]=useState([
        {id:1,name:'laptop',price:3000,quantity:1},
        {id:2,name:'mobile',price:1500,quantity:2},
        {id:3,name:'headphone',price:500,quantity:1}
    ])
    const[cart,setCart]=useState([])

    // add to cart
    function addToCart(product){
        const alreadyExists=cart.find((item)=>item.id===product.id)

        if(alreadyExists){
            setCart(cart.map((item)=>item.id===product.id?
             {...item,quantity:item.quantity+1}   :     item))
        }else{
            setCart([...cart,{...product}])
        }

    }

    // increment quantity
    function increment(id){
        setCart(cart.map((item)=> item.id===id ?
            {...item,quantity:item.quantity+1}:item
    )
    )

    }

    // decrement quantity
    function decrement(id){
        setCart(cart.map((item)=>
        item.id===id && item.quantity>1?
         {...item,quantity:item.quantity-1}:item
    ))
    }

    // remove from cart
    function removeFromCart(id){
        setCart(cart.filter((item)=>item.id!==id))
    }
    return(
        <>
        <h1>Products</h1>
        {products.map((product)=>(
            <div key={product.id}>
                <h3>{product.name} </h3>
                <p>₹{product.price}</p>
                <button onClick={()=>addToCart(product)}>Add to cart</button>

        <hr />

        <h1>Cart</h1>
        {cart.length===0?
        (<p>cart is empty</p>):(
            cart.map((item)=>(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <button onClick={()=>decrement(item.id)}>-</button>

                    <span>
                        {item.quantity}
                    </span>
                    <button onClick={()=>increment(item.id)}>+</button>
                    <button onClick={()=>removeFromCart(item.id)}>remove</button>

                </div>
            ))
        )
    }

            </div>
        ))}
        </>
    )
}
export default Cart
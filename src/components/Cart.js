import React from 'react'
import ItemList from './ItemList'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import { toast } from "react-toastify";


const Cart = () => {


    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart =()=>{
       dispatch(clearCart())
       toast.success("Items removed successfully!");
    }
  return (
    <div className="text-center m-4 p-4" >

        <h1 className="text-2xl font-bold m-2 p-4">Your Cart</h1>
        {
        cartItems.length === 0 ?
         <h1>Add items to cart</h1> : 
        <button className='p-2 m-4  font-bold rounded-lg bg-pink-300' 
        onClick={handleClearCart}
        
        > Clear Cart</button>
        }
        <div className='w-6/12 m-auto'>
        <ItemList  items={cartItems} ></ItemList>

    </div>

    </div>
  )
}

export default Cart
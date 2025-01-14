import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import { toast } from "react-toastify";

const ItemList = ({items}) => {
    console.log("items are",items)
    const dispatch = useDispatch();
    const handleAddItems = (item)=>{
        dispatch(addItem(item))
        toast.success("Items added to cart successfully!");

    }
    
  return (
    <div>
        {
            items.map((item)=>(
                <div className="flex items-stretch border-gray-200 border-b-2">
                <div  
                    key={item.card.info.id}
                    className="p-8 m-2  text-left flex-1">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> -₹{item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="flex items-center justify-center m-2">
                    { item.card.info.imageId &&
                        <img 
                        alt="NoImage"
                        src={CDN_URL+item.card.info.imageId} 
                        className="w-36 h-auto object-contain rounded-xl"
                    />
                    }
                    <div className="absolute">
                        <button className="p-2 bg-white shadow-lg mt-16 w-16 rounded-lg text-green-700 font-bold"
                         onClick={()=>handleAddItems(item)}
                        >
                            ADD+</button>
                    </div>
                </div>
            </div>
            
            ))
        }
    </div>
    
  )
}

export default ItemList
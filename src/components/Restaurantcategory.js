import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'

const Restaurantcategory = ({data, showItems, setShowIndex}) => {
  //const [showItem,setShowItem] = useState(false);
  const[btnText,setbtnText]=useState("▼")
  
    console.log("data is",data)
    const handleArrow = () =>{
     setShowIndex();
      if( btnText === "▼"? setbtnText("▲") : setbtnText("▼") );
     
    }
  return (
    <div>
        <div className="mx-auto my-8 p-4 w-6/12 shadow-lg bg-gray-50  cursor-pointer">
         
              <div className="flex justify-between">
              <span className="font-bold text-lg"
          >{data.title} ({data.itemCards.length})
          </span> 
          <span onClick={handleArrow}>{btnText}</span>
              </div>
             
           
          {showItems &&  <ItemList items={data.itemCards}></ItemList>}
 
         
        </div>
       
    </div>
  )
}

export default Restaurantcategory
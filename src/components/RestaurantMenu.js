import React from 'react'
import { useState,useEffect } from 'react'
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import { MENUAPI_URL } from '../utils/constants';


function RestaurantMenu() {
  const { resId } = useParams();


const[resInfo,setResInfo] = useState(null)
useEffect(()=>{
    fetchMenu();
},[])



    const fetchMenu = async() =>{
        const data = await fetch(MENUAPI_URL+resId+"&catalog_qa=undefined&")
        const json= await data.json();
      
       setResInfo(json.data)


    };
    console.log(resInfo)


    if (resInfo === null)
    {
      return <Shimmer></Shimmer>
    }
    console.log(resInfo?.cards[2]?.card?.card?.info)
   // console.log("myrsinfo",resInfo.cards[2].card.card.info.name)


   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

   itemCards.map((item) => {
    console.log(item.card.info.name)
    
   })
   console.log(itemCards)




  return (
    <div className="menu">
       <h1>{name}</h1>
       <h2>{cuisines}</h2>
       <ul>
       {
        itemCards.map((item) => {
         return <li>{item.card.info.name}-{item.card.info.price/100}</li>
          
         })
       }
       </ul>
    </div>
  )
}

export default RestaurantMenu
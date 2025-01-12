import React from 'react'
import Shimmer from "./Shimmer";
import { useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Restaurantcategory from './Restaurantcategory';
import { useState } from 'react';


function RestaurantMenu() {
  const { resId } = useParams();
  const[showIndex,setShowIndex]=useState(0)

  const resInfo = useRestaurantMenu(resId);



    console.log(resInfo)
    


    if (resInfo === null)
    {
      return <Shimmer></Shimmer>
    }
    console.log(resInfo?.cards[2]?.card?.card?.info)
   // console.log("myrsinfo",resInfo.cards[2].card.card.info.name)


   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
   console.log("item card are ",itemCards)

   const catodata =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
   console.log("catodata is",catodata)

   const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   )
   console.log("item sorted are",category)

   




  return (
    <div className="text-center">
       <h1 className="font-bold my-10 text-2xl">{name}</h1>
       <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
       {
        category.map((category,index)=>(
          <Restaurantcategory data={category?.card?.card}
           showItems={index === showIndex ? true : false}
           setShowIndex={()=>{
            setShowIndex(index)
            
           }}
           >

          </Restaurantcategory>
        ))
       }
      
    </div>
  )
}

export default RestaurantMenu
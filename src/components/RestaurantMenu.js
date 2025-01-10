import React from 'react'
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';


function RestaurantMenu() {
  const { resId } = useParams();

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
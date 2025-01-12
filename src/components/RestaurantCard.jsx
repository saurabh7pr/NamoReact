import React from "react";
import {CDN_URL} from "../utils/constants"
const ReastaurantCard = (data) =>{
    const {resdata} = data;
   
    return(
        <div className="p-4 m-4 w-[250px] bg-gray-200 rounded-lg  hover:bg-pink-300">
            <img  className="rounded-lg" src={ CDN_URL+resdata.info.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{resdata.info.name}</h3>
          
           <h4 className="text-wrap break-words">{resdata.info.cuisines.join(",")}</h4>
           
            <h4>{resdata.info.avgRating}</h4>
            <h4>{resdata.info.locality}</h4>
          
        </div>  
    );
};


export const withPromotedLabel = (ReastaurantCard ) =>{
    return (props) =>{
        return(
            <div> 
                <label className="absolute bg-pink-400 text-white  p-2 rounded-xl">promoted</label>
                <ReastaurantCard  {...props}></ReastaurantCard>
            </div>
            
        )
    }

}

export default ReastaurantCard;

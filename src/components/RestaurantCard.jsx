import React from "react";
import {CDN_URL} from "../utils/constants"
const ReastaurantCard = (data) =>{
    const {resdata} = data;
   
    return(
        <div className="res-card">
            <img  className="res-logo" src={ CDN_URL+resdata.info.cloudinaryImageId} />
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(",")}</h4>
            <h4>{resdata.info.avgRating}</h4>
          
        </div>  
    );
};

export default ReastaurantCard;

import React from "react";
import ReactDOM from "react-dom/client";
import ReastaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [listOfRes, setListOfRes] = useState([]);
    const[filteredRes,setFilteredRes] = useState([])
    const[apiLive,setapiLive] = useState([])
    const[searchText,setSearchText]=useState("saurabh ")
    useEffect(() => {
        fetchData();
      
    },[]);
  
const fetchData =  async() => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8390936&lng=77.6471693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.8392406&lng=77.6557144&str=Cafe%20Amudham&trackingId=null&submitAction=SUGGESTION&queryUniqueId=d52fe7a8-402d-c131-5505-9a38972eb2d7&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A396620%2C%22primaryRestaurantId%22%3A660675%2C%22cloudinaryId%22%3A%22384d020ad18d2752ddd119cb585024d7%22%2C%22brandId%22%3A396620%2C%22dishFamilyId%22%3A%22846586%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D");
     const apiData = await data.json();
     console.log(apiData)

   
     const apiLive=apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //const apiLive=apiData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT.cards;
     console.log(apiLive)

     apiLive.map((res) => {
        console.log(res.info.name);
     })
    
    
     
  
      setListOfRes(apiLive);
      setFilteredRes(apiLive);
      
    

};  
if(listOfRes.length === 0)
{
    return <Shimmer></Shimmer>
}



    


    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <div className="search-box">
                        <input type="text" value={searchText}
                        onChange={(p)=>{
                            setSearchText(p.target.value);

                        }}>

                        </input>
                        <button onClick={()=>{
                            const filteredRestaurant = listOfRes.filter(
                                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRes(filteredRestaurant)
                            console.log(searchText);

                        }}>search</button>

                    </div>
                </div>
               <button className="filter-btn"
                onClick={() => {
                   const filteredList = listOfRes.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                     console.log(filteredList);

                    setFilteredRes(filteredList)

                }}
               
               
               
               >Top Rated Restaurants</button>
              
            </div>
            <div className="res-container">
                {
                    filteredRes.map((restaurant) => (
                      <Link to={"/restaurant/"+restaurant.info.id}>  <ReastaurantCard key={restaurant.info.id} resdata={restaurant}/></Link>
                        
                    ))
                }
               
              
               
               
                 
            </div>
        </div>
    );
};


export default Body;
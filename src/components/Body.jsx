
import ReactDOM from "react-dom/client";
import {useState,useEffect,useContext} from "react";
import ReastaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () =>{

    const PromotedRestaurants = withPromotedLabel(ReastaurantCard);
    const [listOfRes, setListOfRes] = useState([]);
    const[filteredRes,setFilteredRes] = useState([])
    const[apiLive,setapiLive] = useState([])
    const[searchText,setSearchText]=useState("saurabh ");
     
    const{loggedInUser,setUserName}=useContext(UserContext)

    useEffect(() => {
        fetchData();
      
    },[]);
  
const fetchData =  async() => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.8392406&lng=77.6557144&str=Cafe%20Amudham&trackingId=null&submitAction=SUGGESTION&queryUniqueId=d52fe7a8-402d-c131-5505-9a38972eb2d7&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A396620%2C%22primaryRestaurantId%22%3A660675%2C%22cloudinaryId%22%3A%22384d020ad18d2752ddd119cb585024d7%22%2C%22brandId%22%3A396620%2C%22dishFamilyId%22%3A%22846586%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D");
     const apiData = await data.json();
    

   
     const apiLive=apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //const apiLive=apiData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT.cards;
    

    
    
    
     
  
      setListOfRes(apiLive);
      setFilteredRes(apiLive);
     console.log("data is",apiLive)
      
    

};  

const onlineStatus = useOnlineStatus();
if(onlineStatus == false) {
    return <div>
        offline
    </div>
}
if(listOfRes.length === 0)
{
    return <Shimmer></Shimmer>
}



    


    return(
        <div className="body">
            <div className="flex justify-center">
                <div className=" m-4 p-4 ">
                    <div className="search-box">
                        <input type="text" value={searchText}
                        className="border border-green-300 border-solid p-2 rounded-lg"
                        onChange={(p)=>{
                            setSearchText(p.target.value);

                        }}>

                        </input>
                        <button
                        className="bg-green-400 m-4 px-4 py-2 rounded-lg"
                        
                        
                        onClick={()=>{
                            const filteredRestaurant = listOfRes.filter(
                                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRes(filteredRestaurant)
                            console.log(searchText);

                        }}>search</button>

                    </div>
                </div>
             <div className="flex items-center p-4 m-4">
             <button className="py-2 px-4 bg-gray-400 rounded-lg"
                onClick={() => {
                   const filteredList = listOfRes.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                     console.log(filteredList);

                    setFilteredRes(filteredList)

                }}
               
               
               
               >Top Rated Restaurants</button>
             </div>
             <div className="flex items-center p-4 m-4">
             <input  
             value={loggedInUser}

             className="border flex items-center border-green-300 border-solid p-2 rounded-lg"
             onChange={(e)=>{
                            setUserName(e.target.value);

                        }}>
             </input>

             </div>
              
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredRes.map((restaurant) => (
                      <Link to={"/restaurant/"+restaurant.info.id}> 
                      {
                        restaurant.info.isOpen ?<PromotedRestaurants key={restaurant.info.id} resdata={restaurant}/>   : <ReastaurantCard key={restaurant.info.id} resdata={restaurant}/> 

                      }
                      
                       </Link>
                        
                    ))
                }
               
              
               
               
                 
            </div>
        </div>
    );
};


export default Body;
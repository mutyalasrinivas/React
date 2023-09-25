import {useState} from "react";

import RestarauntCard from "./Card";
import { restaurantList } from "../constants";
 

function filterData(searchInput,restraurants){
      const resData=  restraurants.filter((rst)=>rst.data.name.includes(searchInput));
      return resData;
}


const Body=()=>{
  const [restraurants,setRestraurants]=useState(restaurantList);

  const [searchInput,setSearchInput]=useState();
   const handleChange=(e)=>{
    
  }
  return(<>
   <div className="search-container">
    <input type="text" placeholder="Search" className="search-input" value={searchInput} onChange={ (e)=>
    setSearchInput(
      e.target.value
      )}/>
     
    <button className="search-btn" onClick={()=>{
         const data=filterData(searchInput,restraurants)
         setRestraurants(data)
    }} >Search </button>
   </div>
   <div className="Restraurant-list">
    {restraurants.map((restaurant)=><RestarauntCard  {...restaurant.data} key={restaurant.data.id}/>)}
    
  </div>  
  </>)
}

export default  Body;
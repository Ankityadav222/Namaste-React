
//Interview Question
//WHY Do we need State Variable?
//-->

//Reconsilation





import RestaurentCard from "./Restaurentcard"
import { RestaurentList } from "./constants"
import { useState } from "react";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
//what is state
//what is statehooks()
//what is  React -hooks? ==> Function's
//Hooks are nothing but a normal fuction

const Body =() =>{
  //Normal way of creating variables in React.
  //let SearchTxt =  "KFC";

  //Creating variable in   React by using Usestate Hooks
  //SearchText is local state variable
  const[searchInput, setsearchInput] =  useState("")//This is used to creatae a local variable in React
  const[restaurants, setRestaurants] =  useState(RestaurentList)

  
    return(
      <>
      <div
      className="Search-Container">
        <input
        type="text"
        className="Search-Input"
        placeholder="Search"
        value={searchInput}
         onChange={(e) => {
          setsearchInput(e.target.value);
         }}
        
        >
        
        </input>
        <button className="Search-btn" onClick={() =>{
          //need tofilter the data
           const data =   filterData(searchInput.restaurants)
          //need to determine the data
           setRestaurants(data);
          //Filter the data
        }} 
        >Search </button>
        
      </div>
      
        <div className="Restaurent">  
        
        <RestaurentCard restaurant = {restaurants[0]}/>
        <RestaurentCard restaurant  = {restaurants[1]} />
        <RestaurentCard restaurant  = {restaurants[2]}/>
        <RestaurentCard restaurant  = {restaurants[3]}/>
        <RestaurentCard restaurant  = {restaurants[4]}/>
        <RestaurentCard restaurant  = {restaurants[5]}/>
        <RestaurentCard restaurant  = {restaurants[6]}/>
        <RestaurentCard restaurant  = {restaurants[7]}/>
        <RestaurentCard restaurant  = {restaurants[8]}/>
        <RestaurentCard restaurant  = {restaurants[9]}/>
        <RestaurentCard restaurant  = {restaurants[10]}/>
        <RestaurentCard restaurant  = {restaurants[11]}/>
        <RestaurentCard restaurant  = {restaurants[12]}/>
        <RestaurentCard restaurant  = {restaurants[13]}/>
        <RestaurentCard restaurant  = {restaurants[14]}/>
        
        
      
        
      </div>
      </>
    )
}

export default Body
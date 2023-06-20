import React, { useEffect, useState } from 'react'
import { AllRESTAURANT_FETCH_URL } from '../constants'
import RestaurantCard from './RestaurantCard'
import RestroCount from './RestroCount'
import ShimmerUI from './ShimmerUI'
import { Link } from 'react-router-dom'

const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [filterRestaurantList, setFilterRestaurantList] = useState([])
    const [searchText, setSearchText] = useState('');
    const [errormsg, setErrorMsg] = useState('')
        
  useEffect(()=>{
    fetchRestaurantList();
  },[])

  const fetchRestaurantList = async () => {
    const data = await fetch(AllRESTAURANT_FETCH_URL);
    const json = await data.json();
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
    setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
  }

  const searchRestaurant = () => {
    //search logic 
    const data = restaurantList.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilterRestaurantList(data)
    setErrorMsg('');
    if(data.length === 0){
      setErrorMsg("No match found for "+searchText)
    }
  }
  
   if(!restaurantList) return console.log("hello");

  
  return (
    <>
    <RestroCount/>
    <div className='flex flex-wrap	px-52 my-3'>
    <input 
      type="text"
      value={searchText}
      placeholder='Search for restaurant'
      className='p-2 m-2 border border-gray-200 w-96'
      onChange={(e)=>{
        setSearchText(e.target.value)
      }}
    ></input>
    <button 
      onClick={()=>{
        searchRestaurant()
      }}
    >Search</button>
    </div>

    {errormsg && <div className='p-5 m-5 font-bold shadow-sm px-52'>{errormsg}</div>}

    {restaurantList.length === 0 ? <ShimmerUI/> : (
    <div className='flex justify-between flex-wrap	px-52'>
      {
        filterRestaurantList.map((restaurant)=>{
           return <Link to={"restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard key={restaurant.data.id} {...restaurant.data}/></Link>
        })
      }
    </div>
    )}
    </>
    )
}

export default RestaurantContainer

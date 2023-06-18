import React, { useEffect, useState } from 'react'
import { AllRESTAURANT_FETCH_URL } from '../constants'
import RestaurantCard from './RestaurantCard'
import RestroCount from './RestroCount'
import ShimmerUI from './ShimmerUI'
import { Link } from 'react-router-dom'

const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState([])

  useEffect(()=>{
    fetchRestaurantList();
  },[])

  const fetchRestaurantList = async () => {
    const data = await fetch(AllRESTAURANT_FETCH_URL);
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards)
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
  }
  return (restaurantList.length === 0 )? <ShimmerUI/> : (
    <>
    <RestroCount/>
    <div className='flex justify-between flex-wrap	px-52'>
      {
        restaurantList.map((restaurant)=>{
           return <Link to={"restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard key={restaurant.data.id} {...restaurant.data}/></Link>
        })
      }
    </div>
    </>
  )
}

export default RestaurantContainer

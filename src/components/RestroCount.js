import React from 'react'
import { useEffect, useState } from 'react';
import { AllRESTAURANT_FETCH_URL } from '../constants'

const RestroCount = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetchRestaurantList();
    },[])
    
    const fetchRestaurantList = async () => {
        const data = await fetch(AllRESTAURANT_FETCH_URL);
        const json = await data.json();
        setCount(json?.data?.cards[2]?.data?.data?.cards.length)
    }
    return (
        <div className='px-52 py-5 border-b'>
                <h1 className='font-bold text-2xl'>{count} restaurants</h1>
        </div>
  )
}
export default RestroCount

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShimmerSingular from './ShimmerSingular';
import {SINGLE_RESTAURANT_FETCH_URL} from '../constants'
import {RESTAURANT_IMAGE_CDN} from '../constants'

const RestaurantDetails = () => {
    const [restaurantData,setRestaurantData] = useState([])
    const [restaurantMenuData ,setRestaurantMenuData] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetchRestaurantDeatails();
    },[])

    const fetchRestaurantDeatails = async () => {
        const data = await fetch(SINGLE_RESTAURANT_FETCH_URL+id+"&submitAction=ENTER");
        const json = await data.json()
        // console.log(json.data.cards[0].card.card.info)
        setRestaurantData(json.data.cards[0].card.card.info)
        setRestaurantMenuData(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    }

    return (restaurantData.length == 0 )?(<ShimmerSingular/>):(
        <div className='px-96 py-10'>
            <div className=' shadow-md flex justify-between items-center px-20 py-5'>
                <div>
                    <h1 className='text-2xl font-bold'>{restaurantData.name}</h1>
                    <h1>{restaurantData.cuisines.join(", ")}</h1>
                    <h1>{restaurantData.locality}</h1>
                    <h1>{restaurantData.avgRating} stars</h1>
                    <h1>{restaurantData.totalRatingsString}</h1>
                </div>
                <div>
                    <img className="h-48" alt="restro_img" src={RESTAURANT_IMAGE_CDN+restaurantData.cloudinaryImageId}/>
                </div>
            </div>
            <div>
                {
                    restaurantMenuData.map((restaurantmenu)=>{
                        return <h1>{restaurantmenu.card.info.name}</h1>
                    })
                }
            </div>
           
            
        </div>
    )
}

export default RestaurantDetails

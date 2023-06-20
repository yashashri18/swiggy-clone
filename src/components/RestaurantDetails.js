import React from 'react'
import { useParams } from 'react-router-dom';
import ShimmerSingular from './ShimmerSingular';
import {RESTAURANT_IMAGE_CDN} from '../constants'
import veg_icon from '../images/veg_icon.png'
import non_veg_icon from '../images/non_veg_icon.png'
import useRestraurantDetails from './useRestraurantDetails';

const RestaurantDetails = () => {
    
    const {id} = useParams();

    //custom hook to fetch data (allows separation of concerns)
    const [restaurantData, restaurantMenuData] = useRestraurantDetails(id)

    return (restaurantData.length === 0 )?(<ShimmerSingular/>):(
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
                    restaurantMenuData.map((restaurantmenu,index)=>{
                        return (
                            <div className="flex shadow-md p-5 m-5 justify-between items-center" key={index}>
                                <div >
                                    {(restaurantmenu.card.info.isVeg===1) ? (<img className="w-5" alt="veg_icon" src={veg_icon}/>) : (<img className="w-5" alt="nonveg_icon" src={non_veg_icon}/>)}
                                    <h1 >{restaurantmenu.card.info.name}</h1>
                                    <h1 >₹ {restaurantmenu.card.info.price/100}</h1> 
                                </div>
                                <div>
                                    <button className='text-green-600'>Add</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantDetails

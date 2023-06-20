import {useState, useEffect} from 'react'
import {SINGLE_RESTAURANT_FETCH_URL} from '../constants'

const useRestraurantDetails = (id) => {
    const [restaurantData,setRestaurantData] = useState([])
    const [restaurantMenuData ,setRestaurantMenuData] = useState([]);

    useEffect(()=>{
        fetchRestaurantDeatails();
    },[])

    const fetchRestaurantDeatails = async () => {
        const data = await fetch(SINGLE_RESTAURANT_FETCH_URL+id+"&submitAction=ENTER");
        const json = await data.json()
        setRestaurantData(json.data.cards[0].card.card.info)
        setRestaurantMenuData(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    }
    return ([restaurantData,restaurantMenuData]
  )
}

export default useRestraurantDetails

import React from 'react'

const RestaurantCard = ({name,cuisines,avgRating,costForTwo,cloudinaryImageId}) => {
  return (
    <div className='hover:border hover:border-b-slate-500 p-2 w-80'>
      <img alt="restro_img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
      <h1 className='font-bold'>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo /100} FOR TWO</h3>
    </div>
  )
}

export default RestaurantCard

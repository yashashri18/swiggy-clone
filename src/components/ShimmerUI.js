import React from 'react'

const ShimmerUI = () => {
  return (
    <div className='px-52 flex justify-between flex-wrap'>
        {
        Array(21).fill("").map((e, index)=>(
            <div key={index} className='m-6 w-52 h-52 bg-gray-200'></div>
          ))
        }
    </div>
    
  )
}

export default ShimmerUI

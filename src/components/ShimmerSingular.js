import React from 'react'

const ShimmerSingular = () => {
  return (
    <>
        <div className='px-52 flex justify-between flex-wrap'>
            <div className='h-52 m-5 w-screen bg-gray-100' ></div>
        </div>
        <div className='px-52 flex justify-between flex-wrap'>
            {
                Array(10).fill("").map((e, index)=>(
                    <div key={index} className='h-24 m-5 w-screen bg-gray-100' ></div>
                    
                ))
            }
        </div>
    </>
  )
}

export default ShimmerSingular

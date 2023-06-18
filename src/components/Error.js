import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div className='my-12 m-auto w-52'>
      <h1 className='font-bold text-3xl text-center'>OPPS !!</h1>
      <h1 className='font-bold text-3xl text-center'>{err.status}</h1>
      <h1 className='font-bold text-3xl text-center'>{err.statusText}</h1>
    </div>
  )
}

export default Error

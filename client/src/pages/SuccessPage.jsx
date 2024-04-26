import React from 'react'
import { Link } from 'react-router-dom'

export default function SuccessPage() {
  return (
    <div className='h-[60%] w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold font-white'>You successfully Submitted the form</h1>
        <p className='text-xl font-bold text-gray-400'>Return to <Link to="/" className='underline'>Home</Link></p>
    </div>
  )
}

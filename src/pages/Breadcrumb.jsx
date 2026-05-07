import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div>
        <div className='text-white text-2xl font-bold p-4 bg-blue-900 flex justify-between '>
            Media search
            <div className='flex gap-5 text-lg font-normal'>
            <Link className='hover:text-blue-300 bg-blue-300 p-1 px-3 rounded-lg' to="/">Home</Link>
            <Link className='hover:text-blue-300 bg-blue-300 p-1 px-3 rounded-lg' to="/collection">Collection</Link>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb
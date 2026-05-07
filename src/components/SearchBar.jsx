import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setquery } from '../redux/features/searchslice'

const SearchBar = () => {

    const [search, setsearch] = useState('')

    const dispatch = useDispatch()

    const handlechange = (e)=>{
        e.preventDefault()
        dispatch(setquery(search))
        setsearch('')
    }
  return (


    <div>
        
        <form onSubmit={handlechange} className='text-white flex items-center justify-center p-4 gap-4 bg-gray-900'>
            <input onChange={(e)=>{
                setsearch(e.target.value)
            }} value={search} className='border-2 border-gray-700 rounded-lg p-2 w-full text-center' type="search" placeholder='Search' />
            <button className='border-2 border-gray-700 rounded-lg p-2'>Search</button>
        </form>
        
        </div>
  )
}

export default SearchBar
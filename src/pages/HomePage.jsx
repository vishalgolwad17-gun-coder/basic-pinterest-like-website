import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import Resultgrid from '../components/Resultgrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const HomePage = () => {

    const {query} = useSelector((state)=> state.search)
  return (
    <div>
        
        <SearchBar />
       
       {query != '' ? <><Tabs /><Resultgrid /></>: '' }
    
    </div>
  )
}

export default HomePage
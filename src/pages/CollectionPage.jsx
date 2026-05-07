import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromcollection,clearcollection, cleartoastify } from '../redux/features/collectionslice';
import { removetoastify } from '../redux/features/collectionslice';


const CollectionPage = () => {

  const {items} = useSelector((state)=>state.collection)

  const dispatch = useDispatch();

  const removeitem = (items)=>{
    dispatch(removefromcollection(items))
    dispatch(removetoastify())
  }

  const clearitem = ()=>{
    dispatch(clearcollection())
    dispatch(cleartoastify())
  }

  return (
    <div className='text-white flex flex-wrap gap-4 justify-center'>
      <div className='text-white flex justify-between w-full bg-gray-900 p-3 px-5 sticky top-0 z-10'>
        <h1 className='mt-4'>My Collection</h1>
        <button onClick={()=>{clearitem()}} className='bg-red-600 text-white p-2 rounded-lg m-2 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:scale-110 active:scale-95'>Clear collection</button>
      </div>
      
        {items.length === 0 ? <h1 className='text-gray-800 text-5xl mt-60'>Empty collection</h1> : items.map((item)=>{
          return(
            <div key={item.id} className='h-[300px] w-[300px] bg-white rounded-2xl relative hover:scale-105 transition-all duration-500 z-0'>
              <a href={item.link} target='_blank' className='h-full'>
                {item.type === 'photo' && <img src={item.thumbnail} loading='lazy' alt={item.title} className='object-cover h-full w-full rounded-lg'/>}
                {item.type === 'video' && <video src={item.src} alt={item.title} muted autoPlay loop className='object-cover h-full w-full rounded-lg'/>}
                {item.type === 'gif' && <img src={item.thumbnail} loading='lazy' alt={item.title} className='object-cover h-full w-full rounded-lg'/>}
               </a>
               <div id = 'bottom' className='absolute bottom-0 text-white p-6 w-full '>{item.title}</div>
               <button onClick={()=>{
                removeitem(item)
               }} className='absolute top-0 right-0 bg-red-600 text-white p-2 rounded-lg m-2 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>remove</button>
            </div>
          )
        })}
        </div>
  )
}

export default CollectionPage
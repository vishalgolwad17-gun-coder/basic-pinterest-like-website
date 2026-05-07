import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocollection } from '../redux/features/collectionslice'
import { toastify } from '../redux/features/collectionslice'

const ResultCard = () => {


    const {results} = useSelector((state) => state.search)

    const dispatch = useDispatch()

    const storetheitem = (items) =>{
        dispatch(addtocollection(items))
        dispatch(toastify())
    }
  return (
    <div className='flex flex-wrap gap-4 p-6 justify-center '>
        {results.map((items)=>{
            return(
                <div key={items.id} className='h-[300px] w-[300px] rounded-lg relative hover:scale-105 transition-all duration-500 cursor-pointer active:scale-95'>
                <a href={items.link} target='_blank' className='h-full '>
                {items.type === 'photo' && <img src={items.thumbnail} loading='lazy' alt={items.title} className='object-cover h-full w-full rounded-lg'/>}
                {items.type === 'video' && <video src={items.src} alt={items.title} muted autoPlay loop className='object-cover h-full w-full rounded-lg'/>}
                {items.type === 'gif' && <img src={items.thumbnail} loading='lazy' alt={items.title} className='object-cover h-full w-full rounded-lg'/>}
               </a>
               <div id = 'bottom' className='text-center p-10 text-white absolute bottom-0'>{items.title}</div>
               <button onClick={()=>{
                storetheitem(items)
               }}className='absolute top-0 right-0 bg-blue-600 text-white p-3 rounded-lg m-2 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer active:scale-95'>save</button>
            </div>
                
        
            )
        })}
    </div>
  )
}

export default ResultCard
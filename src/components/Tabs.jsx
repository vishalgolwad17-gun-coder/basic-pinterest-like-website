import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setactivetab } from '../redux/features/searchslice'

const Tabs = () => {

    const tabs = ['photos','videos','gif']

    const dispatch = useDispatch()

    const activetab = useSelector((state)=>state.search.activetab)


  return (
    <div className='flex items-center gap-8 mx-6 my-5'>
        {tabs.map((elem,idx) => {
            return (
                <button 
                className={`${activetab === elem ? 'bg-blue-600' : 'bg-gray-800'} text-white p-3 rounded-lg active:scale-95 transition-all duration-300`}
                key = {idx}
                onClick = {() =>{dispatch(setactivetab(elem))}}>
                    {elem}
                </button>
            )
        })}

    </div>
  )
}

export default Tabs
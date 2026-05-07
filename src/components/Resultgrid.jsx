import { useDispatch , useSelector } from "react-redux"
import { seterror,setloading,setresults } from "../redux/features/searchslice" 
import { fetchgifs, fetchvideos, fetchphotos } from "../api/mediaApi"
import { useEffect } from "react"
import ResultCard from "./ResultCard"

const Resultgrid = () => {

    const dispatch = useDispatch()

    let {query,activetab,results,loading,error} = useSelector((state => state.search))
 

    useEffect(()=>{

        if(!query) return

        let datafetch = async () => {

            try {

                dispatch(setloading(true))

                    let data = []

        if( activetab === 'photos'){
            let res = await fetchphotos(query)
            data = res.data.results.map((item) => (

                {
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src:item.urls.full,
                    link: item.links.html
                }

            ))
        
        }
        if( activetab === 'videos'){
            let res = await fetchvideos(query)
            data = res.data.videos.map((item) => (
                {
                    id: item.id,
                    type: 'video',
                    title: item.user.name,
                    thumbnail: item.image,
                    src:item.video_files[0].link,
                    link:item.url
                }
            ))
        }
        if( activetab === 'gif'){
            let res = await fetchgifs(query)
            data = res.data.data.map((item) => (
               
                {
                    id: item.id,
                    type: 'gif',
                    title: item.title,
                    thumbnail: item.images.fixed_height.url,
                    src:item.images.fixed_height.url,
                    link:item.url
                }
            ))
        }
        
        dispatch(setresults(data));
        
            } catch (error) {
                console.log(error)
                dispatch(seterror('something went wrong'))
            }
    }
    
    datafetch();
  
},[query,activetab,dispatch])

if(error){
    return <h1 className="text-white text-center">error</h1>
}
if(loading){
    return <h1 className="text-white text-center">loading....</h1>
}

  return (
    <div className='text-white'>
    <ResultCard results={results}/>
    </div>
  )
}

export default Resultgrid
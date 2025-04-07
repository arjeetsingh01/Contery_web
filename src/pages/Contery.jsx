import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../Countery/postApi';
import { Loadear } from '../components/ui/Lodear';
import { Cardcanter } from '../components/Layout/Cardcanter';
import { SearchFilter } from '../components/ui/SearchFilter';




export const Contery = () => {

  const [isPanding, startTransition] = useTransition();
  const [conteries, setConteries] = useState([]);
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")

  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryData();
      setConteries(res.data)
      console.log(res)
    })
  },[])

  if(isPanding) return <Loadear/>;

  // Search Work 
  const seracrhCountery = (countery)=>{
    if(search){
      return countery.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return countery;
  }

  const filterResgion = (countery) =>{
    if( filter == "all") return countery;
    return countery.region == filter;
  }
 
  const filterConteris =  conteries.filter((countery)=> seracrhCountery(countery) && filterResgion(countery));


  return (
    <section className="py-10  px-6  bg-black min-h-screen ">
     
     <SearchFilter
      search = {search}
      setSearch = {setSearch}
      filter = {filter}
      setFilter = {setFilter}
      conteries = {conteries}
      setConteries = {setConteries}
     />

      <ul  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          filterConteris.map((curt)=>{ 
              return <Cardcanter key={curt.index} country={curt}/>
            })
        }
      </ul>
    </section>
  )
}

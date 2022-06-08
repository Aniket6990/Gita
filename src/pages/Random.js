import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Random = () => {
    const [Random, setRandom] = useState({
        slok:"",
        chapter: Math.floor(Math.random() * 18) + 1,
        verse: Math.floor(Math.random() * 25) + 1,
        meaning:"",
        engmeaning:"",
        vyakhya:"",
        engVyakhya:"",
    });

    const callAPI=()=>{
        axios.get(`https://bhagavadgitaapi.in/slok/${Random.chapter}/${Random.verse}/`).then((res)=>{
      setRandom({
        slok:res.data.slok,
        chapter:res.data.chapter,
        verse:res.data.verse,
        meaning: res.data.tej.ht,
        engmeaning:res.data.purohit.et,
        vyakhya: res.data.chinmay.hc,
        engVyakhya: res.data.raman.et,
      })
    }).catch((err)=>{
      console.log(err);
    })
    }
    useEffect(()=>{
       callAPI();
    })
  return (
    <>
    <div className="pt-2 pb-2 pr-4 pl-4 sm:pr-20 sm:pl-20 flex flex-col items-center text-white">
        <h5 className='pt-3'>{Random.slok}</h5>
        <h5 className="pt-3">{Random.meaning}</h5>
        <h5 className='pt-3'>{Random.engMeaning}</h5>
        <h5 className='pt-3'>{Random.vyakhya}</h5>
        <h5 className='pt-3'>{Random.engVyakhya}</h5>
    </div>
    </>
  )
}

export default Random
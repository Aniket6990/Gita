import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Chapter = (props) => {
  let params = useParams();
    const [chapter, setchapter] = useState({
        slok:"",
        chapter: params.id,
        verse: 1,
        meaning:"",
        engmeaning:"",
        vyakhya:"",
        engVyakhya:"",
    });

    const callAPI=()=>{
      axios.get(`https://bhagavadgitaapi.in/slok/${chapter.chapter}/${chapter.verse}/`).then((res)=>{
      setchapter({
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
    const handleNext=()=>{
      axios.get(`https://bhagavadgitaapi.in/slok/${chapter.chapter}/${chapter.verse+1}/`).then((res)=>{
        setchapter({
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
    const handlePrev=()=>{
      axios.get(`https://bhagavadgitaapi.in/slok/${chapter.chapter}/${chapter.verse>=1 && chapter.verse-1}/`).then((res)=>{
        setchapter({
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
  return (
    <>
    <div className="pt-2 pb-2 pr-4 pl-4 sm:pr-20 sm:pl-20 flex flex-col items-center text-white">
        <h5 className='pt-3'>{chapter.slok}</h5>
        <h5 className="pt-3">{chapter.meaning}</h5>
        <h5 className='pt-3'>{chapter.engMeaning}</h5>
        <h5 className='pt-3'>{chapter.vyakhya}</h5>
        <h5 className='pt-3'>{chapter.engVyakhya}</h5>
        <div className="w-full mt-5 flex justify-between">
          <div className='px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 hover:cursor-pointer' onClick={handlePrev}>
            Prev
          </div>
          <div className='px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 hover:cursor-pointer' onClick={handleNext}>
            Next
          </div>
        </div>
    </div>
    </>
  )
}

export default Chapter
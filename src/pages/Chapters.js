import axios from 'axios'
import React,{useState,useEffect} from 'react'
import ChapterCard from '../components/ChapterCard'

const Chapters = () => {
  const [chapters,setChapters] = useState([])

  const callAPI=async()=>{
    const response = await axios.get('https://bhagavadgitaapi.in/chapters/')
    setChapters(response.data)
  }

  useEffect(()=>{
    callAPI();
  },[])
  
  return (
    <>
    <div className="w-full">
      {
        chapters.map((item)=>{
          return(
            <ChapterCard key={item.chapter_number} chapter_number={item.chapter_number} name={item.name} meaning_hi={item.meaning.hi} meaning_en={item.meaning.en} summary_hi={item.summary.hi} summary_en={item.summary.en}/>
          )
        })
      }
    </div>
    </>

  )
}

export default Chapters
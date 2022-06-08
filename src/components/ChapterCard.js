import React from 'react'
import { Link } from "react-router-dom";

const ChapterCard = (props) => {
  return (
    <>
    <div className='m-2 p-3 border-solid border-2 border-white-600 rounded-md text-white flex flex-col items-center'>
      <h2 className='mt-2'>Chapter Number: {props.chapter_number}</h2>
        <h2 className='mt-2'>{props.name}</h2>
        <h4 className='mt-2'>{props.meaning_hi}</h4>
        <h4 className='mt-2'>{props.meaning_en}</h4>
        <p className='mt-2'>{props.summary_hi}</p>
        <br />
        <p className='mt-2'>{props.summary_en}</p>
        <div className="mt-2 bg-purple-600 rounded-lg p-2">
          <Link to={"chapter/"+props.chapter_number}>Read Chapter: {props.chapter_number}</Link>
        </div>
    </div>
    </>
  )
}

export default ChapterCard
import React from 'react'
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav'
import Chapter from './pages/chapter'
import Chapters from './pages/Chapters'
import Random from './pages/Random'


const App = () => {
  return (
    <>
    <div className='h-screen overflow-scroll pb-8 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 '>
    <Nav/>
    <Routes>
      <Route path='/' element={<Random/>}/>
      <Route path='chapters' element={<Chapters/>}/>
      <Route exact path='chapters/chapter/:id' element={<Chapter/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Sello from '../pages/sello'
import Reg from '../pages/reg'

export default function sello() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Sello/>}/>
    <Route path='/reg' element={<Reg/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Sello from '../pages/sello'

export default function sello() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Sello/>}/>
    </Routes>
    </BrowserRouter>
  )
}

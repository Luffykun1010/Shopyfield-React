import React from 'react'
import Homepage from './Homepage'
import {Routes,Route} from "react-router-dom";
import Aboutpage from './Aboutpage';
import Catpage from './Catpage';
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="categories" element={<Catpage />} />
      </Routes>
    </>
  )
}

export default MainRouter

import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Categories from '../categories/Categories'
import Links from './../categories/Links';

const Catpage = () => {
  return (
    <>
      <title>Shopyfield : Categories</title>
      <Navbar />
      <Links />
      <Categories />
      <Footer />
    </>
  )
}

export default Catpage

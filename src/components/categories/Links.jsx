import React from 'react'
import { Link } from 'react-router-dom';
import './Links.css'
const Links = () => {
  return (
    <>
      <div className='links'>
        <Link to="/">Home</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <Link to="">Categories</Link>
      </div>
    </>
  )
}

export default Links

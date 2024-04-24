import React from 'react';
import adidas from '../images/adidasimg1.jpeg';
import './Categories.css';
const Categories = () => {
    return (
        <>
            <div className="anime animes d-flex justify-content-center text-dark">
                <h3 className='mx-5 bs-name new active'>Categories</h3>
            </div>
            <div className="anime animes d-flex justify-content-center flex-wrap" style={{ marginTop: '-2.2em', marginBottom: '2em' }}>
                <div className="cat-card">
                    <img className='card-img' src={adidas} alt="" />
                    <div className="text-center">
                        <h4>sdfsdf</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories

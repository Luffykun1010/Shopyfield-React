import React, { useState } from 'react';
import './Home.css';
import Grid from '@mui/material/Grid';
import banner from '../images/Designer.png';
import adidas from '../images/adidasimg1.jpeg';
const Home = () => {
    const newProducts = () => {
        const bsName = document.getElementsByClassName('best');
        const nwName = document.getElementsByClassName('new');
        for (let i = 0; i < bsName.length; i++) {
            bsName[i].classList.remove("active");
        }
        for (let i = 0; i < nwName.length; i++) {
            nwName[i].classList.add('active');
        }
    }
    const bestProducts = () => {
        const bsName = document.getElementsByClassName('best');
        const nwName = document.getElementsByClassName('new');
        for (let i = 0; i < bsName.length; i++) {
            bsName[i].classList.add('active');
        }
        for (let i = 0; i < nwName.length; i++) {
            nwName[i].classList.remove("active");
        }
    }
    const [isHovered, setIsHovered] = useState(false);
    var top = document.getElementsByClassName('top');
    if (isHovered) {
        for (let i = 0; i < top.length; i++) {
            top[i].classList.add("position-relative");
        }
    } else {
        for (let i = 0; i < top.length; i++) {
            top[i].classList.remove("position-relative");
        }
    }
    return (
        <>
            <Grid container spacing={2} className='banner-grid'>
                <Grid item md={8} xs={12} className="top" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} >
                    <img className='anim banner-img' src={banner} alt="Banner" />
                </Grid>
                <Grid item md={4}></Grid>
                <Grid item md={4}></Grid>
                <Grid item md={8}>
                    <img className='anim banner-img-1' src={banner} alt="Banner" />
                </Grid>
            </Grid >
            <div className="anime mt-2 mb-3 d-flex justify-content-center text-dark">
                <h3 className='mx-5 bs-name best active' onClick={bestProducts}><span>Best</span> Seller</h3>
                <div class="vl"></div>
                <h3 className='mx-5 bs-name new' onClick={newProducts}><span>New</span> Arrival</h3>
            </div>
            <div className="d-flex justify-content-center flex-wrap" style={{marginTop: '-0.8em',marginBottom:'2em'}}>
                <div className="card-neu">
                    <img className='card-img' src={adidas} alt="" />
                    <div className="text-center">
                        <p>Adidas</p>
                        <h5>sdfsdf</h5>
                        <div className='rate-card'>
                            <p>Shoes</p>
                            <p className="rate">₹ 1500</p>
                        </div>
                    </div>
                    <button>View Product</button>
                </div>
                <div className="card-neu">
                    <img className='card-img' src={adidas} alt="" />
                    <div className="text-center">
                        <p>Adidas</p>
                        <h5>sdfsdf</h5>
                        <div className='rate-card'>
                            <p>Shoes</p>
                            <p className="rate">₹ 1500</p>
                        </div>
                    </div>
                    <button>View Product</button>
                </div>
                <div className="card-neu">
                    <img className='card-img' src={adidas} alt="" />
                    <div className="text-center">
                        <p>Adidas</p>
                        <h5>sdfsdf</h5>
                        <div className='rate-card'>
                            <p>Shoes</p>
                            <p className="rate">₹ 1500</p>
                        </div>
                    </div>
                    <button>View Product</button>
                </div>
                <div className="card-neu">
                    <img className='card-img' src={adidas} alt="" />
                    <div className="text-center">
                        <p>Adidas</p>
                        <h5>sdfsdf</h5>
                        <div className='rate-card'>
                            <p>Shoes</p>
                            <p className="rate">₹ 1500</p>
                        </div>
                    </div>
                    <button>View Product</button>
                </div>
            </div >
        </>
    )
}

export default Home
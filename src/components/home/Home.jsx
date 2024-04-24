import React, { useState } from 'react';
import './Home.css';
import Grid from '@mui/material/Grid';
import banner from '../images/Designer.png';
import adidas from '../images/adidasimg1.jpeg';
import recommended from '../images/recommended.jpg';
import { Carousel, Col, Row } from 'react-bootstrap';
import Categories from './../categories/Categories';
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
    return (
        <>
            <Grid containerclassName='banner-grid'>
                <Grid item xs={12} className="top" >
                    <img className='anim banner-img' src={banner} alt="Banner" />
                </Grid>
            </Grid >
            <div className="anime animes mt-4 mb-3 d-flex justify-content-center text-dark">
                <h3 className='mx-5 bs-name best active' onClick={bestProducts}><span>Best</span> Seller</h3>
                <div class="vl"></div>
                <h3 className='mx-5 bs-name new' onClick={newProducts}><span>New</span> Arrival</h3>
            </div>
            <div className="comp" style={{ marginTop: '-0.8em', marginBottom: '2em' }}>
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
            <div className="mob">
                <Carousel indicators={false}>
                    <Carousel.Item interval={800}>
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
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
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
                    </Carousel.Item>
                </Carousel>
            </div>
            <Row className='w-100 my-3'>
                <Col></Col>
                <Col xs={11} md={5} className='animes'><img src={recommended} alt="" className='rec-img' /></Col>
                <Col xs={12} md={5} className='d-flex justify-content-center'>
                    <div className="rec-neu">
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
                </Col>
                <Col></Col>
            </Row>
            <Categories />
        </>
    )
}

export default Home
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="sign-in">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <a href=""><button>Sign in</button></a>
                    <p>New customer? <a href="">Start here</a></p>
                </div>
            </div>
            <div className="first-footer">
                <div className="d-flex justify-content-center p-3 flex-wrap">
                    <a href="">Become a Seller</a>
                    <a href="">Advertise</a>
                    <a href="">Help Center</a>
                </div>
            </div>
            <div class="footer">
                <div className="d-flex justify-content-evenly flex-wrap px-4 pb-5">
                    <div style={{ marginTop: '5em', }}>
                        <a href="" className='head-name text-white'>SHOPPYFIELD</a>
                    </div>
                    <div style={{ marginTop: '5em', padding: '0 0.3em' }}>
                        <p href="" className='foot-head'>LINKS</p>
                        <div className='foot-link d-flex flex-column'>
                            <a href="">About</a>
                            <a href="">Careers</a>
                            <a href="">Information</a>
                            <a href="">Blogs</a>
                        </div>
                    </div>
                    <div style={{ marginTop: '5em', padding: '0 0.5em' }}>
                        <p href="" className='foot-head'>CATEGORIES</p>
                        <div className='foot-link d-flex flex-column'>
                            <a href="">Electronics</a>
                            <a href="">Mens Fasion</a>
                            <a href="">Girls Fasion</a>
                            <a href="">Appliances</a>
                            <a href="">Perfumes</a>
                        </div>
                    </div>
                    <div style={{ marginTop: '5em', padding: '0 0.5em' }}>
                        <p href="" className='foot-head'>HELP</p>
                        <div className='foot-link d-flex flex-column'>
                            <a href="">Payments</a>
                            <a href="">Shipping</a>
                            <a href="">Cancellation</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                </div>
                <div className="last-footer">
                    <div className="d-flex justify-content-center flex-wrap">
                        Copyright © 2024 - <a href="https://luffykun1010.github.io/portfoliio/Muhammed_suhail"> Muhammed
                        Suhail</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

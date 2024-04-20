import React, { useState } from 'react';
import './Navbar.css';
import { Row, Col, Button, Offcanvas } from 'react-bootstrap';
const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        var offCanv =  document.querySelectorAll('.off-canv');
        for (var i = 0; i < offCanv.length; i++) {
            offCanv[i].classList.remove('off-anim');
            offCanv[i].classList.remove('off-anim1');
            offCanv[i].classList.remove('off-anim2');
            offCanv[i].classList.add('off-anim-reverse');
        }
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <header className='fixed-top nav-bar'>
                <Row className='anime pt-4 w-100'>
                    <Col className='text-end' sm={3}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6c757d" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </Col>
                    <Col></Col>
                    <Col className='text-center' sm={4}>
                        <a href="" className='head-name'>SHOPYFIELD</a>
                    </Col>
                    <Col></Col>
                    <Col sm={3}>
                        <div className='d-flex justify-content-between' style={{ width: '10em' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="32" fill="#6c757d" class="bi bi-person-fill-exclamation" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#6c757d" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </div>
                    </Col>
                </Row>
                <ul className='anime category d-flex justify-content-center'>
                    <li className='cat-list'>Electronics</li>
                    <li className='cat-list'> Mens Fasion</li>
                    <li className='cat-list'>Girls Fasion</li>
                    <li className='cat-list'>Appliances</li>
                    <li className='cat-list'>Perfumes</li>
                </ul>
            </header>
            <header className='fixed-top off-canvas'>
                <Row className='anime py-4 w-100'>
                    <Col className='text-start' xs={6}>
                        <a href="" className='head-name px-2'>SHOPYFIELD</a>
                    </Col>
                    <Col xs={6} className='text-end'>
                        <Button className='offc-btn' onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#6c757d" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
                <Offcanvas placement="bottom" className='offcanvas-bottom w-100 h-100' show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='h-100 d-flex justify-content-center flex-column'>
                            <div className='off-canv off-anim d-flex justify-content-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6c757d" class="bi bi-tag-fill" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                </svg>
                                <a href=""><h1>Categories</h1></a>
                            </div>
                            <div className='off-canv off-anim1 mt-2 d-flex justify-content-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6c757d" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <a href=""><h1>Search</h1></a>
                            </div>
                            <div className='off-canv off-anim2 mt-2 d-flex justify-content-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6c757d" class="bi bi-person-fill-exclamation" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                </svg>
                                <a href=""><h1>Profile</h1></a>
                            </div>
                        </div>
                        <div className="d-flex align-bottom" style={{ marginTop: '-1.5em', fontSize: '12pt' }}>
                            <a href="" className='ms'>@MuhammedSuhail</a>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        </>
    )
}

export default Navbar

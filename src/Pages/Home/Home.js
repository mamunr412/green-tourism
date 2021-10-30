import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Carousel, Col, Form, Row, Spinner } from 'react-bootstrap';
import './Home.css'
import Tour from './Tour/Tour';
import img1 from '../../images/carousole/bandarban1.jpeg'
import img2 from '../../images/carousole/bandarban3.jpg'
import img3 from '../../images/carousole/cox-bazar1.jpg'
import img4 from '../../images/carousole/cox-bazar3.jpg'
import img5 from '../../images/carousole/martin1.jpg'
import img6 from '../../images/carousole/martin3.jpg'

const Home = () => {
    const [tours, setTours] = useState(null);

    useEffect(() => {
        axios.get('https://mighty-waters-11643.herokuapp.com/tours')
            .then(tours => setTours(tours.data))
    }, [])

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="py-md-5 text-center">
                        <div className='banner-text1 py-5'>
                            <h1>Green Tourism</h1>
                            <h3>Lets Explore The World!</h3>
                        </div>
                        <div className='py-5 d-flex flex-md-row flex-column'>
                            <button className='ms-md-auto join-fb-btn join-google-btn'><i className="fab fa-facebook-f"></i> Like us on Facebook</button>
                            <button className='me-md-auto  join-google-btn'><i className="fas fa-users"></i> Join Our Community</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-bg">
                <div className="container pb-3">
                    <div className='p-3'>
                        <div>
                            <h1 className='text-center tour-title pt-5 border-bottom'>OUR TOUR'S</h1>
                        </div>
                        <div className='pt-3'>
                            {!tours ?
                                <div className="text-center py-5">
                                    <Spinner animation="border" variant="primary" />
                                </div>

                                :
                                <Row xs={1} md={3} className="g-4">
                                    {tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)}
                                </Row>
                            }
                        </div>
                    </div>
                    <div className='px-3 mt-5 rounded-3 best-places'>
                        <h1 className='text-center tour-title pt-2 border-bottom'>Best Places</h1>
                        <div className='py-3 row '>
                            <div className='col-md-6'>
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img3}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img4}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img5}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img6}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className='col-md-6'>
                                <h3 className='border-bottom my-3 text-white'>Here are some best places of Bangladesh you can visit.</h3>
                                <div className='d-flex justify-content-around places text-white'>
                                    <ul>
                                        <li>Roma</li>
                                        <li>Nilgiri</li>
                                        <li>Kuakata</li>
                                        <li>Jamuna River</li>
                                        <li>Srimangal</li>
                                        <li>Paharpur</li>
                                        <li>Ratatgul Swamp Forest</li>
                                    </ul>
                                    <ul>
                                        <li>Sundarbans</li>
                                        <li>Chittagong Hill-Tracts</li>
                                        <li>Lalbag Fort</li>
                                        <li>Ahsan Manzil</li>
                                        <li>Bisanakandi</li>
                                        <li>Jaflong</li>
                                        <li>Puthia</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-0 py-md-5 news-subscribe text-white'>
                <div className='px-4 py-5'>
                    <h3 className='fw-bold fs-1 py-3'>Subscribe to our Newsletter</h3>
                    <h3 className='fs-1 py-3'>Get weekly travel inspiration, offers, contests, and more!</h3>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Form.Control placeholder="Zip Code" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Email" />
                        </Col>
                        <Col>
                            <Button variant="primary">Submit</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Home;
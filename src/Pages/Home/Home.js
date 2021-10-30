import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './Home.css'
import Tour from './Tour/Tour';

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
                            <button className='ms-md-auto join-fb-btn join-google-btn'><i className="fab fa-facebook-f"></i> Join With Facebook</button>
                            <button className='me-md-auto join-google-btn'><i className="fab fa-google"></i> Join With Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-bg">
                <div className="container">
                    <div>
                        <div>
                            <h1 className='text-center tour-title pt-5 border-bottom'>OUR TOUR'S</h1>
                        </div>
                        <div>
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

                    <div>
                        <h3>Extra section</h3>

                    </div>
                    <div>
                        <h3>Extra section</h3>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
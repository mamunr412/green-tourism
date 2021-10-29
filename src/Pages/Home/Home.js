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
        axios.get('http://localhost:5000/tours')
            .then(tours => setTours(tours.data))
    }, [])
    console.log(tours)
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className=" d-flex justify-content-between flex-md-row flex-column">
                        <div className="py-5">
                            <h1 className='banner-text1'>Green Tourism</h1>
                            <h1 className='banner-text2'>Lets Explore The World!</h1>
                        </div>
                        <div className="py-5">
                            <img width="100%" className='cover-img' src="https://15togo.com/static/img/slide-3-img.6a51ec1.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div>
                        <h1 className='text-center pt-3 border-bottom'>Our Tour's</h1>
                    </div>
                    <div>
                        {!tours ?
                            <div className="text-center py-5">
                                <Spinner animation="border" />
                            </div>

                            :
                            <Row xs={1} md={2} className="g-4">
                                {tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)}
                            </Row>
                        }
                    </div>
                </div>
            </div>
            <div>
                <h3>Extra section</h3>

            </div>
            <div>
                <h3>Extra section</h3>

            </div>
        </div>
    );
};

export default Home;
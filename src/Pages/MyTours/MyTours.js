import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../ContextApi/useAuth';
import ShowJoinedTour from '../ShowJoinedTour/ShowJoinedTour';

const MyTours = () => {
    const { user } = useAuth();
    const [myTours, setMyTours] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const email = [user.email];

        axios.post('https://mighty-waters-11643.herokuapp.com/joinedtours/byuser', email)
            .then(tours => {
                setMyTours(tours.data)
            }).finally(() => {
                setLoading(false);
            });
    }, [user])

    const deleteJoinedTour = id => {
        const confirm = window.confirm('Are You Sure?');
        if (confirm) {
            axios.delete(`https://mighty-waters-11643.herokuapp.com/deleteJoinedTour/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        const currentTours = myTours.filter(tour => tour._id !== id);
                        setMyTours(currentTours);
                    }
                })
        }

    }
    return (
        <div className='all-bg'>
            <div className='container text-center py-4'>
                <h1 className=' text-center tour-title border-bottom text-uppercase'>Your Tours</h1>

                {
                    loading ?
                        <Spinner animation="border" variant="success" />
                        :
                        <div className='pt-3'>
                            {
                                myTours.length ?
                                    <Row xs={1} md={4} className="g-4">
                                        {myTours.map(tour => <ShowJoinedTour deleteJoinedTour={deleteJoinedTour} key={tour._id} tour={tour}></ShowJoinedTour>)}
                                    </Row>
                                    :
                                    <div>
                                        <h3 className='text-center text-danger pt-5'>You didnt join any Tour!</h3>
                                    </div>
                            }

                        </div>

                }
            </div>

        </div>
    );
};

export default MyTours;
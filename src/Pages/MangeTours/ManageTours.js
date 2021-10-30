import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ShowJoinedTour from '../ShowJoinedTour/ShowJoinedTour';

const ManageTours = () => {
    const [myTours, setMyTours] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        axios.get('https://mighty-waters-11643.herokuapp.com/alljoinedTours')
            .then(res => {
                setMyTours(res.data)
            }).finally(() => {
                setLoading(false);
            });
    }, [])

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


    const updateJoinedTour = (id, newStatus) => {
        axios.patch(`https://mighty-waters-11643.herokuapp.com/joinedtour/${id}`, { status: newStatus })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert('Status Updated')
                }
            })
    }

    return (
        <div className='all-bg'>
            <div className="container text-center py-4">
                <h1 className='pt-3 tour-title border-bottom text-uppercase'>Manage All joined Tours</h1>
                <div className='pt-3'>
                    {
                        loading ?
                            <Spinner animation="border" variant="success" />
                            :
                            <div>
                                {
                                    myTours.length ?
                                        <Row xs={1} md={4} className="g-4">
                                            {myTours.map(tour => <ShowJoinedTour updateJoinedTour={updateJoinedTour} deleteJoinedTour={deleteJoinedTour} key={tour._id} tour={tour}></ShowJoinedTour>)}
                                        </Row>
                                        :
                                        <div>
                                            <h3 className='text-center text-danger pt-5'>No Joined Tour!</h3>
                                        </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageTours;
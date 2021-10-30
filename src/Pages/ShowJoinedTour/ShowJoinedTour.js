import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowJoinedTour = ({ tour, deleteJoinedTour, updateJoinedTour }) => {
    const [newStatus, setNewStatus] = useState(false);

    const { name, reqDate, number, address, tourID, _id, status, email } = tour;
    const [tourIs, setTourIs] = useState({});

    useEffect(() => {
        axios.get(`https://mighty-waters-11643.herokuapp.com/tour/${tourID}`)
            .then(tour => setTourIs(tour.data))
            .finally(() => {
                setNewStatus(status);
            })
    }, [status, tourID])

    const updateStatus = () => {
        if (newStatus) {
            setNewStatus(false);
            updateJoinedTour(_id, false);
        } else {
            setNewStatus(true);
            updateJoinedTour(_id, true);
        }
    }


    return (

        <Col>
            <Card className='h-100 p-3 tour-card' style={{ backgroundColor: '#276368' }}>
                <h2 className='tour-title' style={{ fontSize: '30px' }}>{tourIs.name}</h2>
                {
                    tourIs.name ? <Link className='pb-4 details-from-joined text-white' to={`/jointour/${tourID}`}>Details About {tourIs.name}</Link>
                        :
                        <p className='pb-4 details-from-joined text-warning'>This Tour is Removed!</p>
                }
                <h4 className='mb-0'>Name: {name}</h4>
                <p className='mb-0'>Email: {email}</p>
                <p className='mb-0'>Status: {newStatus ?
                    <small><i className="fas text-success fa-circle"></i> Approved</small> :
                    <small><i className="fas text-warning fa-circle"></i> Pending</small>}
                </p>
                {
                    updateJoinedTour &&
                    <Button onClick={updateStatus} variant="warning" className='w-50 mx-auto my-2 status-btn' size="sm">{newStatus ? "Make This Pending" : "Approve This Tour"}</Button>
                }
                <p className='mb-0'>Join Request Date: {reqDate}</p>
                <p className='mb-0'>Address: {address}</p>
                <p>Number: {number}</p>
                <button className='delete-button w-50 mx-auto' onClick={() => deleteJoinedTour(_id)}>Delete Tour</button>
            </Card>
        </Col>
    );
};

export default ShowJoinedTour;
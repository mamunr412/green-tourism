import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

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
    }, [tourID, status])

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

        <div>
            {
                tourIs.name ?
                    <div>
                        <h1>{tourIs.name}</h1>
                        <h2>{name}</h2>
                        <p>Email: {email}</p>
                        <small>Status: {newStatus ?
                            <small>Active</small> :
                            <small>Pending</small>}
                        </small>
                        {
                            updateJoinedTour && <button onClick={updateStatus}>{newStatus ? "Make This Pending" : "Active This Tour"}</button>
                        }
                        <p>Join Request Date: {reqDate}</p>
                        <p>Address: {address}</p>
                        <p>Number: {number}</p>
                        <button onClick={() => deleteJoinedTour(_id)}>Delete Tour</button>
                    </div>
                    :
                    <p>loading...</p>
            }

        </div>
    );
};

export default ShowJoinedTour;
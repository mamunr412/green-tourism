import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SingleTour = ({ tour, deleteJoinedTour }) => {

    const { name, reqDate, number, address, tourID, _id } = tour;
    const [tourIs, setTourIs] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/tour/${tourID}`)
            .then(tour => setTourIs(tour.data))
    }, [tourID])


    return (

        <div>
            {
                tourIs.name ?
                    <div>
                        <h1>{tourIs.name}</h1>
                        <h2>{name}</h2>
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

export default SingleTour;
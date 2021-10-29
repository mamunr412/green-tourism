import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const JoinTour = () => {
    const [tour, setTour] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/tour/${id}`)
            .then(tour => setTour(tour.data))
    }, [id])


    return (
        <div>
            <h1>{tour.name}</h1>
            <p>{id}</p>
        </div>
    );
};

export default JoinTour;
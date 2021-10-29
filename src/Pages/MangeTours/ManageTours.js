import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowJoinedTour from '../ShowJoinedTour/ShowJoinedTour';

const ManageTours = () => {
    const [myTours, setMyTours] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        axios.get('http://localhost:5000/alljoinedTours')
            .then(res => {
                setMyTours(res.data)
            }).finally(() => {
                setLoading(false);
            });
    }, [])

    const deleteJoinedTour = id => {
        const confirm = window.confirm('Are You Sure?');
        if (confirm) {
            axios.delete(`http://localhost:5000/deleteJoinedTour/${id}`)
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
        console.log(id, newStatus);

        axios.patch(`http://localhost:5000/joinedtour/:${id}`, { newStatus })
            .then(res => console.log(res.data))
    }
    return (
        <div className="container">
            {
                loading ?
                    <p>loading...</p>
                    :
                    <div>
                        {myTours.map(tour => <ShowJoinedTour updateJoinedTour={updateJoinedTour} deleteJoinedTour={deleteJoinedTour} key={tour._id} tour={tour}></ShowJoinedTour>)}
                    </div>
            }
        </div>
    );
};

export default ManageTours;
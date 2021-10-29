import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
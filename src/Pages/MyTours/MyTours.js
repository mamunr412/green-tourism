import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../ContextApi/useAuth';
import ShowJoinedTour from '../ShowJoinedTour/ShowJoinedTour';

const MyTours = () => {
    const { user } = useAuth();
    const [myTours, setMyTours] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const email = [user.email];

        axios.post('http://localhost:5000/joinedtours/byuser', email)
            .then(tours => {
                setMyTours(tours.data)
            }).finally(() => {
                setLoading(false);
            });
    }, [user])

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
    console.log(myTours)
    return (
        <div>
            {
                loading ?
                    <p>loading...</p>
                    :
                    <div>
                        {myTours.map(tour => <ShowJoinedTour deleteJoinedTour={deleteJoinedTour} key={tour._id} tour={tour}></ShowJoinedTour>)}
                    </div>
            }
        </div>
    );
};

export default MyTours;
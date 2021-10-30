import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import CarouselLoad from './Carousel/CarouselLoad';
import './JoinTour.css'
import TourDetail from './TourDetail/TourDetail';
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../ContextApi/useAuth';

const JoinTour = () => {

    const [tour, setTour] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://mighty-waters-11643.herokuapp.com/tour/${id}`)
            .then(tour => setTour(tour.data))
    }, [id])

    const { name, img1, img2, img3, _id } = tour;

    const onSubmit = data => {
        const joinDetails = data;
        const date = new Date();
        const status = false;
        const joinDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        joinDetails.reqDate = joinDate;
        joinDetails.tourID = _id;
        joinDetails.status = status;
        console.log(joinDetails);

        axios.post('https://mighty-waters-11643.herokuapp.com/joinedtour', joinDetails)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    alert('You joined succesfully!')
                }
            })
    }


    return (
        <div className='all-bg py-3'>
            <div className='carousel-bg'>
                <div className='container'>
                    <div className='col-md-6 pb-3 mx-md-auto mx-2 col'>
                        <CarouselLoad key={_id} name={name} img1={img1} img2={img2} img3={img3}></CarouselLoad>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='mt-4 text-center border-bottom'>
                    <h1 className='tour-title'>{name}</h1>
                </div>
                <div className='row my-3'>
                    <div className='col-md-6 p-3 tour-details'>
                        <TourDetail key={_id} tour={tour} ></TourDetail>
                    </div>
                    <div className='col-md-6 mt-md-0 mt-4 px-md-4'>
                        <Form className='tour-details fw-bold rounded p-4' onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="text" {...register("name")} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required type="text" {...register("address")} placeholder="Enter Your Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" {...register("email")} value={user.email || ""} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Number</Form.Label>
                                <Form.Control required type="text" {...register("number")} placeholder="Enter Your Number" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Join {name}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JoinTour;
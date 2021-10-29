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
        axios.get(`http://localhost:5000/tour/${id}`)
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

        axios.post('http://localhost:5000/joinedtour', joinDetails)
            .then(confirm => {
                console.log(confirm)

                reset();

                alert('You joined succesfully!')
            })





    }


    return (
        <div className='join-tour-bg py-3'>
            <div className='carousel-bg'>
                <div className='container'>
                    <div className='col-md-8 pb-3 mx-md-auto mx-2 col'>
                        <CarouselLoad key={_id} img1={img1} img2={img2} img3={img3}></CarouselLoad>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='mt-4 text-center border-bottom'>
                    <h1>{name}</h1>
                </div>
                <div className='row my-3'>
                    <div className='col-md-6'>
                        <TourDetail key={_id} tour={tour} ></TourDetail>
                    </div>
                    <div className='col-md-6 p-md-5 p-2'>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" {...register("name")} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" {...register("address")} placeholder="Enter Your Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" {...register("email")} value={user.email || ""} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Number</Form.Label>
                                <Form.Control type="text" {...register("number")} placeholder="Enter Your Number" />
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
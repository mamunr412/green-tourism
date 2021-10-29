import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';
import DeleteTour from './DeleteTour';

const AddNewTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const [tours, setTours] = useState([]);


    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [gratuities, setGratuities] = useState(false);
    const [stayCost, setstayCost] = useState(false);
    const [tourInserted, setTourInserted] = useState(false);
    const onSubmit = data => {
        const included = {
            breakfast,
            lunch,
            dinner,
            gratuities,
            stayCost
        }
        data.included = included;

        axios.post('https://mighty-waters-11643.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    alert('New Tour Added')
                    setTourInserted(true)
                }
            })
    }


    useEffect(() => {
        axios.get('https://mighty-waters-11643.herokuapp.com/tours')
            .then(tours => setTours(tours.data))
    }, [tourInserted])

    const deleteTour = id => {
        if (tours.length > 6) {
            axios.delete(`https://mighty-waters-11643.herokuapp.com/tour/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Tour Deleted');
                        const remaining = tours.filter(tour => tour._id !== id);
                        setTours(remaining);
                    }
                })
        } else {
            alert('If Your want to delete, All Tour Should be more then six')
        }


    }

    return (
        <div className='container'>
            <div className='p-2 my-5 border'>
                <h1>Add a New Tour</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4">
                            <Form.Label>Tour Name</Form.Label>
                            <Form.Control {...register("name")} type="text" placeholder="Enter Tour Name" />
                        </Form.Group>

                        <Form.Group className="col-md-4">
                            <Form.Label>Tour Cost</Form.Label>
                            <Form.Control {...register("cost")} type="text" placeholder="Enter Tour Cost" />
                        </Form.Group>
                        <Form.Group className="col-md-4">
                            <Form.Label>Plan for</Form.Label>
                            <Form.Control {...register("planFor")} type="text" placeholder="How many days for Tour?" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="col-md-6">
                            <Form.Label>Check in Date</Form.Label>
                            <Form.Control {...register("checkInDate")} type="text" placeholder="Enter Check in date" />
                        </Form.Group>

                        <Form.Group className="col-md-6">
                            <Form.Label>Check out Date</Form.Label>
                            <Form.Control {...register("checkOutDate")} type="text" placeholder="Enter Check out date" />
                        </Form.Group>
                    </Row>
                    <Form.Label>Overview</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Write tour overview here...">
                        <Form.Control
                            {...register("overview")}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Row className="mb-3">
                        <Form.Group className="mb-3 col-md-3 d-flex flex-column">
                            <Form.Label>Tour Will be included:</Form.Label>
                            <Form.Check
                                onChange={(e) => setBreakfast(e.target.checked)}
                                inline
                                label="Breakfast"
                            />
                            <Form.Check
                                onChange={(e) => setLunch(e.target.checked)}
                                inline
                                label="Lunch"
                            />
                            <Form.Check
                                onChange={(e) => setDinner(e.target.checked)}
                                inline
                                label="Dinner"
                            />
                            <Form.Check
                                onChange={(e) => setGratuities(e.target.checked)}
                                inline
                                label="Gratuities"
                            />
                            <Form.Check
                                onChange={(e) => setstayCost(e.target.checked)}
                                inline
                                label="Stay cost"
                            />
                        </Form.Group>
                        <Row className='col-md-9'>
                            <Form.Group className="col-md-6">
                                <Form.Label>Tour Image 1</Form.Label>
                                <Form.Control {...register("img1")} type="text" placeholder="Enter Tour Image Link" />
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Tour Image 2</Form.Label>
                                <Form.Control {...register("img2")} type="text" placeholder="Enter Tour Image Link" />
                            </Form.Group>
                            <Form.Group className="col-md-6">
                                <Form.Label>Tour Image 3</Form.Label>
                                <Form.Control {...register("img3")} type="text" placeholder="Enter Tour Image Link" />
                            </Form.Group>
                        </Row>
                    </Row>

                    <Button variant="primary" type="submit">
                        Add New Tour
                    </Button>
                </Form>
            </div>
            <div className='p-2 my-5 border'>
                <h1>Delete Tour</h1>
                <small className='text-warning'>You can delete when tour will contain at-least six tour!</small>
                <div className="row g-2">
                    {tours.map(tour => <DeleteTour deleteTour={deleteTour} key={tour._id} tour={tour}></DeleteTour>)}
                </div>

            </div>
        </div >
    );
};

export default AddNewTour;
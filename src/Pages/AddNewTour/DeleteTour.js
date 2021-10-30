import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const DeleteTour = ({ deleteTour, tour }) => {

    const { name, img1, _id } = tour;
    return (

        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button onClick={() => deleteTour(_id)} variant="primary" size="sm">delete</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DeleteTour;
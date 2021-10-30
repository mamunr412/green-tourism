import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    const { name, img2, cost, overview, _id } = tour;
    return (
        <Col>
            <Card className="h-100 p-2 tour-card">
                <Card.Img variant="top" src={img2} />
                <Card.Body className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <Card.Title className='fw-bold fs-xl'>{name}</Card.Title>
                        <Card.Text className='text-warning fw-bold pt-3'>
                            Cost: {cost}tk.
                        </Card.Text>
                        <div className='pt-3'>
                            <Link className='join-tour-btn' to={`/jointour/${_id}`}>Join Tour</Link>
                        </div>
                    </div>
                    <Card.Text title={overview} className="w-50">
                        {overview.slice(0, 150)}. . .
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Tour;
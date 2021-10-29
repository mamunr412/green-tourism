import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {

    const { name, img2, cost, overview, _id } = tour;

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img2} />
                <Card.Body className='d-flex justify-content-between'>
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Cost: {cost}tk.
                        </Card.Text>
                        <Link to={`/jointour/${_id}`}>Join This Tour</Link>
                    </div>
                    <Card.Text title={overview} className="w-75 ps-3">
                        {overview.slice(0, 150)}. . .
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Tour;
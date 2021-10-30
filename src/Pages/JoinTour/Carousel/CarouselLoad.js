import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselLoad = ({ name, img1, img2, img3 }) => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>{name}</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>{name}</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>{name}</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselLoad;
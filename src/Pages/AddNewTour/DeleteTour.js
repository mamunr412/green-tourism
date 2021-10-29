import React from 'react';

const DeleteTour = ({ deleteTour, tour }) => {

    const { name, img1, _id } = tour;
    return (
        <div className='col-6 col-md-3'>
            <div className="d-flex border p-3 gap-2">
                <img width='100px' height='60px' src={img1} alt="" />
                <h5>{name}</h5>
                <button onClick={() => deleteTour(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default DeleteTour;
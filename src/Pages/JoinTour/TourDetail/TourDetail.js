import React from 'react';

const TourDetail = ({ tour }) => {

    const { name, checkInDate, checkOutDate, cost, included, overview, planFor } = tour;

    return (
        <>
            <div>
                <h3 className='border-bottom py-2'>{name} details</h3>
                <h2 className='text-success fw-bold'>Tour Cost: {cost}tk.</h2>
            </div>
            <div>
                <p>{overview}</p>
            </div>
            <div className='d-flex align-items-center'>
                <div>
                    <h3 className='fw-bold'>Checkin Date: {checkInDate}</h3>
                    <h3 className='fw-bold'>Checkout Date: {checkOutDate}</h3>
                    <h5>{planFor} Tour</h5>
                </div>

                <div className='ps-5 border-start ms-4'>
                    <h5>Included:</h5>
                    <div className='d-flex align-items-center gap-2'>
                        <h4 className='mb-0'>Breakfast</h4> {
                            included?.breakfast ?
                                <i className="fas text-success fa-check"></i>

                                :
                                <i className="fas text-danger fa-times"></i>
                        }
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h4 className='mb-0'>Lunch</h4>{
                            included?.lunch ?
                                <i className="fas text-success fa-check"></i>

                                :
                                <i className="fas text-danger fa-times"></i>
                        }
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h4 className='mb-0'>Dinner</h4>{
                            included?.dinner ?
                                <i className="fas text-success fa-check"></i>

                                :
                                <i className="fas text-danger fa-times"></i>
                        }
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h4 className='mb-0'>Gratuities</h4>{
                            included?.gratuities ?
                                <i className="fas text-success fa-check"></i>

                                :
                                <i className="fas text-danger fa-times"></i>
                        }
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h4 className='mb-0'>StayCost</h4>{
                            included?.stayCost ?
                                <i className="fas text-success fa-check"></i>

                                :
                                <i className="fas text-danger fa-times"></i>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourDetail;
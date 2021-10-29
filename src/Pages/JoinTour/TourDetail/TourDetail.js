import React from 'react';

const TourDetail = ({ tour }) => {
    const { name, checkInDate, checkOutDate, cost, included, overview, planFor } = tour;
    return (
        <>

            <div>
                <h3 className=' border-bottom py-2'>{name} details</h3>
                <h2>Tour Cost: {cost}tk.</h2>
            </div>
            <div>
                <p>{overview}</p>
            </div>
            <div>
                <h3>Checkin Date: {checkInDate}</h3>
                <h3>Checkout Date: {checkOutDate}</h3>
                <h5>{planFor} Tour</h5>
            </div>
            <div className='py-3'>
                <h5>Included:</h5>
                <div className='d-flex align-items-center gap-2'>
                    {
                        included?.breakfast ?
                            <i className="fas text-success fa-check"></i>

                            :
                            <i className="fas text-danger fa-times"></i>
                    }<h4>Breakfast</h4>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    {
                        included?.lunch ?
                            <i className="fas text-success fa-check"></i>

                            :
                            <i className="fas text-danger fa-times"></i>
                    }<h4>Lunch</h4>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    {
                        included?.dinner ?
                            <i className="fas text-success fa-check"></i>

                            :
                            <i className="fas text-danger fa-times"></i>
                    }<h4>Dinner</h4>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    {
                        included?.gratuities ?
                            <i className="fas text-success fa-check"></i>

                            :
                            <i className="fas text-danger fa-times"></i>
                    }<h4>Gratuities</h4>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    {
                        included?.stayCost ?
                            <i className="fas text-success fa-check"></i>

                            :
                            <i className="fas text-danger fa-times"></i>
                    }<h4>StayCost</h4>
                </div>

            </div>

        </>
    );
};

export default TourDetail;
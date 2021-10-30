import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
import img from '../../images/page-not-found.png'

const Error = () => {
    return (
        <div className='all-bg'>
            <div className='container text-center pb-5'>
                <img className='w-50 mx-auto mb-4 d-block' src={img} alt="" />
                <Link className='back-to-home' to='/'><i className="fas fa-home"></i> Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;
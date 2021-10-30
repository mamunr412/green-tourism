import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark py-3'>
            <div className='container footer'>
                <div className='mb-3 border-bottom'>
                    <div className='row'>
                        <div className='col-md-6 d-flex flex-column'>
                            <Link to='/home'>Help Center</Link>
                            <Link to='/home'>Privacy and Cookies Statement</Link>
                            <Link to='/home'>About Viator</Link>
                            <Link to='/home'>Careers</Link>
                            <Link to='/home'>Sitemap</Link>
                        </div>
                        <div className='col-md-6 d-flex flex-column'>
                            <Link to='/home'>Supplier Sign Up</Link>
                            <Link to='/home'>Travel Agents</Link>
                            <Link to='/home'>Become an Affiliate</Link>
                        </div>
                    </div>
                    <div className='my-3'>
                        <i className="fab mx-2 px-2 py-1 bg-secondary rounded text-dark fs-xxl fa-facebook-square"></i>
                        <i className="fab mx-2 px-2 py-1 bg-secondary rounded text-dark  fa-twitter-square"></i>
                        <i className="fab mx-2 px-2 py-1 bg-secondary rounded text-dark  fa-instagram-square"></i>
                        <i className="fab mx-2 px-2 py-1 bg-secondary rounded text-dark  fa-youtube-square"></i>
                        <i className="fab mx-2 px-2 py-1 bg-secondary rounded text-dark  fa-pinterest-square"></i>
                    </div>
                </div>
                <div className='d-flex align-items-center flex-column flex-md-row'>
                    <h2 className='text-white' style={{ fontFamily: "'Lobster', cursive" }}>Green Tourism</h2>
                    <div className='text-secondary ms-4' >
                        <div className='border-bottom text-center'>
                            <p className='mb-2'>&copy; 2010-2021 Green Tourism</p>
                        </div>
                        <div className='mt-2'>
                            <Link className='px-2 border-end' to='/home'>Terms & Conditions</Link>
                            <Link className='px-2' to='/home'>Manage Settings</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
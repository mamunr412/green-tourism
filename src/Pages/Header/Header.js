import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../ContextApi/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="border-bottom pb-0" style={{ fontFamily: "'Lobster', cursive", fontSize: '30px' }} as={Link} to="/">Green Tourism</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/managetours'>Manage All Joined Tours</Nav.Link>
                        <Nav.Link as={Link} to='/managetour'>Add or Delete Tour</Nav.Link>
                    </Nav>
                    <Nav>
                        <div>

                            {
                                user.email ?
                                    <div className='d-flex align-items-md-center flex-md-row flex-column pt-3 pt-md-0 border-md-top'>
                                        <p className='text-warning mb-0'>Hello, {user.displayName}</p>
                                        <Nav.Link as={Link} to='/mytours'>My Tours</Nav.Link>
                                        <Nav.Link onClick={logOut}><i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
                                    </div>
                                    :
                                    <div>
                                        <Nav.Link as={Link} to='/login'><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                                    </div>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
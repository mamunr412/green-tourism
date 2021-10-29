import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../ContextApi/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Green Tourism</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/home'>Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <div className='d-flex align-items-center flex-md-row flex-column'>
                            <div>
                                {user.email && <p className='text-warning mb-0'>Hello, {user.displayName}</p>}
                            </div>
                            <div>
                                {user.email ?
                                    <Nav.Link onClick={logOut}>Logout</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                }
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
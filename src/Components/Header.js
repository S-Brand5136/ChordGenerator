import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
    <>
        <Navbar bg="dark" variant='dark'>
            <Navbar.Brand  href="#home">Grocery List</Navbar.Brand>
        </Navbar>
    </>
    )
}

export default Header

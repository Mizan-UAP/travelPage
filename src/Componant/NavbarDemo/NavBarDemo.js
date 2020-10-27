import React from 'react';
import './NavBarDemo.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBarDemo = () => {
    return (

        < >
            <Navbar className="navColor " variant="dark" >
                <img className="logo contrast" src={require("../../Image/Logo.png")} alt="" />
                <Form inline>
                    <FormControl type="text" placeholder=" Search your destination..." className="mr-sm-2" />

                </Form>
                <Nav className="mr-auto d-flex justify-content-end ">
                    <Nav.Link href="#"><Link to="/home">Home</Link></Nav.Link>
                    
                    <Nav.Link href="#"><Link to="/destination">Destination</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/blog">Blog</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/contact">Contact</Link></Nav.Link>
                    <Button style={{ height: "35px", color: '' }} > <Link to="/login">Login</Link></Button>
                </Nav>
            </Navbar>
        </>


    );
};

export default NavBarDemo;
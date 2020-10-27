import React from 'react';
import './NewAccount.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const NewAccount = () => {
    return (
        <div>
                 <div className="header">
                <Navbar className="navColor NavLogin" variant="dark" >
                    <img className="logo contrast" src={require("../../Image/Logo.png")} alt="" />
                    <Form inline>
                        <FormControl type="text" placeholder=" Search your destination..." className="mr-sm-2" />

                    </Form>
                    <Nav className="mr-auto d-flex justify-content-end">
                        <Nav.Link className="menuList" href="#">Home</Nav.Link>
                        <Nav.Link href="#">Destination</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                        <Button style={{ height: "35px", color: '' }} > Login</Button>
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
};

export default NewAccount;
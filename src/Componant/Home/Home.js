import { Card } from 'react-bootstrap';
import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import NavBarDemo from '../NavbarDemo/NavBarDemo';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homeCom " >
            <div className="container-fluid">
                <div className="row">
                    <div className="header">
                        <NavBarDemo></NavBarDemo>
                    </div>
                    <div className="col-sm-5 demoDetails">
                        <h1 style={{ fontSize: '70px', color: 'white' }}>Cox's Bazar</h1>
                        <p>Cox's Bazar is a city, a fishing port and a tourist destination in southeastern Bangladesh. It is the headquarters of Cox's Bazar district of Chittagong division. Cox's Bazar is famous for its natural beauty. It has the longest uninterrupted natural sandy beach in the world at 122 km.
                        Cox's Bazar (Bengali: কক্সবাজার) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as "yellow flower". Another old name was "Palongkee".
                        </p>
                        <Button> <Link to="/booking">Booking -></Link></Button>
                    </div>
                    <div className="col-sm-7">
                        <div className="row cardImg ">
                            <div className="col-sm-3">
                                <Card >
                                    <Card.Img variant="top" src={require("../../Image/sundorbon.png")} />
                                    <Button > <Link to="/booking">Sundarban</Link></Button>                                   
                                </Card>
                            </div>
                            <div className="col-sm-3">
                                <Card >
                                    <Card.Img variant="top" src={require("../../Image/Sreemongol.png")} />
                                    <Button > <Link to="/booking">Sreemongol</Link></Button>
                                </Card>
                            </div>
                            <div className="col-sm-3">
                                <Card >
                                    <Card.Img variant="top" src={require("../../Image/Sajek.png")} />
                                    <Button > <Link to="/booking">Sajek</Link></Button>
                                </Card>
                            </div>



                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Home;
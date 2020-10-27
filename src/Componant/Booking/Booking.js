import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBarDemo from '../NavbarDemo/NavBarDemo';
import './Booking.css';

const Booking = () => {
    return (
        <div className="homeCom">
            <div className="container-fluid">
                <div className="row">
                    <div className="header">
                        <NavBarDemo></NavBarDemo>
                    </div>
                    <div className="col-sm-7 demoDetails">
                        <h1 style={{ fontSize: '70px', color: 'white' }}>Cox's Bazar</h1>
                        <p>Cox's Bazar is a city, a fishing port and a tourist destination in southeastern Bangladesh. It is the headquarters of Cox's Bazar district of Chittagong division. Cox's Bazar is famous for its natural beauty. It has the longest uninterrupted natural sandy beach in the world at 122 km.
                        Cox's Bazar (Bengali: কক্সবাজার) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as "yellow flower". Another old name was "Palongkee".
                        </p>
                        <Button> Booking -> </Button>
                    </div>
                    <div className="col-sm-5">
                        <div className="bookingDetails" >

                            <div className="form-group" >
                                <label>Origin</label>
                                <input type="text" class="form-control" name="name" value='Dhaka' placeholder="From" required />
                            </div>

                            <div className="form-group" >
                                <label>Destination</label>
                                <input type="text" class="form-control" name="name" value="Cox's Bazar" placeholder="To" required />
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="dateSeg form-group" >
                                        <label>From</label>
                                        <input type="date" class="form-control" name="name" placeholder="From" required />
                                    </div>


                                </div>
                                <div className="col-sm-6">
                                    <div className="dateSeg form-group" >
                                        <label>To</label>
                                        <input type="date" class="form-control" name="name" placeholder="To" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <a href="login" className="loginBtn"> Login</a>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;
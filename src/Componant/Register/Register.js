import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDemo from '../NavbarDemo/NavBarDemo';

const Register = () => {
    return (
        <div>
            <NavBarDemo></NavBarDemo>
            <div className="container">
                <div className="registerForm">
                    <form>

                        <div className="lgData" style={{ textAlign: 'left' }}>
                            <h3>Create a new account</h3>

                            <div className="form-group">
                                <input type="text" class="form-control" name="first" placeholder="First name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" name="last" placeholder="Last name" required />
                            </div>

                            <div className="form-group">
                                <input type="text" class="form-control" name="email" placeholder="Username or Email" required />
                            </div>
                            <div className="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Confirm password" required />
                            </div>

                            <input type="submit" style={{ backgroundColor: 'goldenrod', borderRadius: '5px' }} class="form-control" value="Create an account" />
                            <br />

                            <label htmlfor="">Do you have any account?</label>
                            <label htmlFor="newUser"><Link to="/login">Login</Link></label>
                        </div>

                    </form>
                    <div style={{ textAlign: 'center' }} >
                    <p style={{ textAlign: 'center', color: 'black' }}>--------------Or--------------</p>
                        <div className="form-group">
                            <button className="optionSignIn">
                                <img className='imgIcon' src={require("../../Image/Icon/google.png")} alt="" />   Sign In with Google</button>
                        </div>
                        <div className="form-group">
                            <button className="optionSignIn">
                                <img className='imgIcon' src={require("../../Image/Icon/fb.png")} alt="" />   Sign In with Facebook</button>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Register;
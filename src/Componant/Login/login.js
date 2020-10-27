import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "./login.css"
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import NavBarDemo from '../NavbarDemo/NavBarDemo';
import firebaseConfig from '../../Firebase.Config';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

firebase.initializeApp(firebaseConfig);

function Login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSIgnIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = {
                    isSIgnIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signInUser);
            })
            .catch(error => {
                console.log(error);
                console.log(error.massage);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then((result) => {
                const signOutUser = {
                    isSIgnIn: false,
                    name: "",
                    email: "",
                    photo: "",
                    success: false
                }
                setUser(signOutUser)
            })
            .catch(error => {

            })
    }

    const handleBlur = (event) => {

        let isValid = true;
        if (event.target.name === "email") {
            const validEmail = /\S+@\S+\.\S+/.test(event.target.value);
            isValid = validEmail;
        }
        if (event.target.name === "password") {
            const validPassword = /[\d]{1}/.test(event.target.value);
            const validPasswordNumber = event.target.value.length > 7 && event.target.value.length < 10;
            isValid = validPassword && validPasswordNumber;
        }
        if (isValid) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch(error => {

                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                });
        }


        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log(response.user);
                })
                .catch(error => {

                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();

    }
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        }).then(function () {
            console.log('User updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (


        <div>
            <div className="header">
                <Navbar className="navColor NavLogin" variant="dark" >
                    <img className="logo contrast" src={require("../../Image/Logo.png")} alt="" />
                    <Form inline>
                        <FormControl type="text" placeholder=" Search your destination..." className="mr-sm-2" />

                    </Form>
                    <Nav className="mr-auto d-flex justify-content-end">
                        <Nav.Link className="menuList" href="#"><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/destination">Destination</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/contact">Contact</Link></Nav.Link>
                        <Button style={{ height: "35px", color: '' }} > <Link to="/login">Login</Link></Button>
                    </Nav>
                </Navbar>
            </div>
            <div style={{ textAlign: 'center' }}>

                {
                    user.isSIgnIn &&
                    <div>
                        <p> User name : {user.name} </p>
                        <p> User email : {user.email} </p>
                        <img src={user.photo} alt="" />
                    </div>
                }

                <form onSubmit={handleSubmit}>

                    <div className="lgData">
                        <h3>Login</h3>
                       
                        <div className="form-group">
                            <input type="text" class="form-control" onBlur={handleBlur} name="email" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" class="form-control" onBlur={handleBlur} name="password" placeholder="Enter password" required />
                        </div>

                        <input type="submit" style={{ backgroundColor: 'goldenrod', borderRadius: '5px' }} class="form-control" value="Login" />
                        <br />

                        <label htmlfor="">Do you have any account?</label>
                        <label htmlFor="newUser"><Link to="/register">Register</Link></label>
                    </div>

                </form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'logged In'} successfully</p>}


            </div >

            <div className="" style={{ textAlign: 'center' }}>
                <p style={{ textAlign: 'center', color: 'black' }}>--------------Or--------------</p>


                <div className="form-group">

                    {

                        user.isSIgnIn ? <button onClick={handleSignOut}> Sign Out</button>
                            : <button className="optionSignIn" onClick={handleSignIn}>
                                <img className='imgIcon' src={require("../../Image/Icon/google.png")} alt="" />   Sign In with Google</button>
                    }
                </div>
                <div className="form-group">
                    <button className="optionSignIn" onClick={handleSignIn}>
                        <img className='imgIcon' src={require("../../Image/Icon/fb.png")} alt="" />  Sign In with Facebook</button>
                </div>
            </div>
        </div>
    );
}

export default Login;

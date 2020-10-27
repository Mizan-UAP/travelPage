import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Componant/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from './Componant/Booking/Booking';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './Componant/Login/login';
import NewAccount from './Componant/NewAccount/NewAccount';
import NotFound from './Componant/NotFound/NotFound.js';
import Register from './Componant/Register/Register';
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';

export const userContext = createContext();



function App() {


    const [loggedInUser, setLoggedInUser] = useState({})
    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>

                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>

                    <Route path="/booking">
                        <Booking></Booking>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/newAccount">
                        <NewAccount></NewAccount>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <PrivateRoute path="/booking">
                        <Booking></Booking>
                    </PrivateRoute>

                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>

                </Switch>
            </Router>

        </userContext.Provider>
    );
}

export default App;

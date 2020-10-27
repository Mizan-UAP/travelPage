import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center',color:'red' }}>
            <h1>Page not found</h1>
            <h2>'404' Error</h2>
             <Link to="/home">Back to Home</Link>
        </div>
    );
};

export default NotFound;
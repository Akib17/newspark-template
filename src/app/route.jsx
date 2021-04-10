import React from 'react';
import { Router } from '@reach/router'
import Home from '../pages/Home/Home';

const AppRouter = () => {
    return (
        <Router>
            <Home path="/" />
        </Router>
    );
};

export default AppRouter;
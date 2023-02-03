import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../Components/Signup';
import Dashboard from '../Components/dashboard';

export default function AppRouter() {
    return (
        <>
            <Router>

                <Routes>
                    <Route path='/' element={<Signup />}></Route>
                </Routes>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />}></Route>
                </Routes>
            </Router>

        </>
    )
}
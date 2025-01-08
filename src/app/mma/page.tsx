"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import MmaHeaderContainer from './components/MmaHeaderContainer';
const page = () => {
    return (
        <div className='hockeyPage'
            style={{ background: "blue" }}>
            <Navbar />
            <MmaHeaderContainer />
        </div>
    );
};

export default page;
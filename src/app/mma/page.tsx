"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import MmaHeaderContainer from './components/MmaHeaderContainer';
const page = () => {
    return (
        <div className='App mma'>
            <div className="home mma">
                <Navbar />
                <MmaHeaderContainer />
            </div>
        </div>
    );
};

export default page;
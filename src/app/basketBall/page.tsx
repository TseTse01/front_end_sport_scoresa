"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import BasketballHeaderContainer from './components/BasketballHeaderContainer';

const page = () => {
    return (
        <div className='App basketballPage'>
            <div className="home basketball">
                <Navbar />
                <BasketballHeaderContainer />
            </div>
        </div>
    );
};

export default page;
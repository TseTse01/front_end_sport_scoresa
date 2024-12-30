"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import BasketballHeaderContainer from './components/BasketballHeaderContainer';

const page = () => {
    return (
        <div className='basketballPage'
            style={{ background: "blue" }}>
            <Navbar />
            <BasketballHeaderContainer />
        </div>
    );
};

export default page;
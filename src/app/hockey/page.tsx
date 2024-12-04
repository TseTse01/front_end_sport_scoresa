"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import HockeyHeaderCotainer from './components/hockeyHeaderCotainer';


const page = () => {
    return (
        <div className='hockeyPage'
            style={{ background: "blue" }}>
            <Navbar />
            <HockeyHeaderCotainer />
        </div>
    );
};

export default page;

"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import RugbyHeaderCotainer from './components/RugbyHeaderContainer';

const page = () => {
    return (
        <div className='hockeyPage'
            style={{ background: "blue" }}>
            <Navbar />
            <RugbyHeaderCotainer />
        </div>
    );
};

export default page;
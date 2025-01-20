
"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import RugbyHeaderCotainer from './components/RugbyHeaderContainer';

const page = () => {
    return (
        <div className='App'>
            <div className='home rugby'>
                <Navbar />
                <RugbyHeaderCotainer />
            </div>
        </div>
    );
};

export default page;
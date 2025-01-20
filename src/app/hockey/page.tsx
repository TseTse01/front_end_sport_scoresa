"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import HockeyHeaderCotainer from './components/HockeyHeaderCotainer';

const page = () => {
    return (
        <div className='App hockeyApp'>
            <div className="home hockey">
                <Navbar />
                <HockeyHeaderCotainer />
            </div>
        </div>
    );
};

export default page;
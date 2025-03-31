"use client";
import React from 'react';
import Navbar from '../football/components/Navbar';
import HockeyHeaderCotainer from './components/HockeyHeaderCotainer';
import Footer from '../sameComposant/Footer';
import Pubinterdit from '../sameComposant/Pubinterdit';

const page = () => {
    return (
        <div className='App hockeyApp'>
            <div className="home hockey">
                <Navbar />
                <HockeyHeaderCotainer />
            </div>
            <Pubinterdit />
            <Footer />
        </div>
    );
};

export default page;
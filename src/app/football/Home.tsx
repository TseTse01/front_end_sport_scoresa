import React from 'react';
import Navbar from "./components/Navbar";
import HeaderContainer from "./components/HeaderContainer"
import { persistor } from '../GlobalRedux/store';
import Footer from '../sameComposant/Footer';

const Home = () => {
    // localStorage.clear();
    // sessionStorage.clear();
    // persistor.purge();
    return (
        <div className="home football">
            <Navbar />
            <HeaderContainer />
            <Footer />
        </div>
    );
};

export default Home;
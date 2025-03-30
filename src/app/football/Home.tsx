import React from 'react';
import Navbar from "./components/Navbar";
import HeaderContainer from "./components/HeaderContainer"
import { persistor } from '../GlobalRedux/store';

const Home = () => {
    // localStorage.clear();
    // sessionStorage.clear();
    // persistor.purge();
    return (
        <div className="home football">
            <Navbar />
            <HeaderContainer />
        </div>
    );
};

export default Home;
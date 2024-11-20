import React from 'react';
import Navbar from "./components/Navbar";
import HeaderContainer from "./components/HeaderContainer"

const Home = () => {
    return (
        <div className="appContainer">
            <div className="home">
                <Navbar />
                <HeaderContainer />
            </div>
        </div>
    );
};

export default Home;
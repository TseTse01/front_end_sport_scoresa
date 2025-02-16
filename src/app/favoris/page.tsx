"use client";
import Navbar from "../football/components/Navbar";
import FavorisHeader from './components/FavorisHeader';
// import Home from '../football/Home';



const FavorisPage = () => {


    return (
        <div className="App favoris">
            <div className='home favoris'>
                <Navbar />
                <FavorisHeader />
            </div>
        </div>
    );
};

export default FavorisPage;
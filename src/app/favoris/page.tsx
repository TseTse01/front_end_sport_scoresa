"use client";
import Navbar from "../football/components/Navbar";
import Footer from "../sameComposant/Footer";
import FavorisHeader from './components/FavorisHeader';




const FavorisPage = () => {


    return (
        <div className="App favoris">
            <div className='home favoris'>
                <Navbar />
                <FavorisHeader />
                <Footer />
            </div>
        </div>
    );
};

export default FavorisPage;
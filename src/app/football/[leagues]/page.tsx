"use client"
import React from 'react';
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Competitions from './components/competitions';


const page = () => {
    const pathname = usePathname();
    console.log(pathname + "here");
    const testId = pathname.split("/").pop();
    // console.log(testId);

    return (
        <div className="App">
            <div className="home football">
                <Navbar />
                <div className='headerCintainer'>
                    <Competitions />
                </div>
            </div>
        </div>
    );
};

export default page;
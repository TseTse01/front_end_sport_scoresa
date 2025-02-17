"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import NavbarLeague from './components/NavbarLeague';
import Competitions from './components/competitions';
import LeagueContainerDynamic from './components/LeagueContainerDynamic';
import Footer from './components/Footer';
import axios from "axios";
import { idsLeague } from './idsLeague';
import Navbar from '../components/Navbar';

const page = () => {
    const [leaguesIds, setLeaguesIds] = useState<idsLeague[]>([]);
    const [messageError, setMessageError] = useState<boolean>(false);
    const pathname = usePathname();
    // console.log(pathname + "here");
    const testId = pathname.split("/").pop();
    // console.log(testId);
    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`http://localhost:3000/leagues/${testId}`);
                const d = response.data;
                console.log(d);

                if (d.result && d.leaguesData.length > 0) {
                    setLeaguesIds(d.leaguesData)
                } else {
                    setMessageError(true)
                    console.log("array vides");

                }


            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, [testId]);
    const NoMatch = <div>haliludia</div>

    return (
        <div className="App">
            <div className="home football">
                <Navbar />
                <div className='headerCintainer'>
                    {leaguesIds && leaguesIds.map((el, index) =>
                        <Competitions dataLeaguesId={el} key={index} />
                    )}
                    <LeagueContainerDynamic dataLeaguesId={leaguesIds} />
                    <div className='matchTiketContainer'>ssooooss</div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default page;
"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import Competitions from './components/competitions';
import LeagueContainerDynamic from './components/LeagueContainerDynamic';
import Footer from './components/Footer';
import axios from "axios";
import { idsLeague } from './idsLeague';
import Navbar from '../components/Navbar';

const Page = () => {
    const [leaguesIds, setLeaguesIds] = useState<idsLeague[]>([]);
    const [messageError, setMessageError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    const testId = pathname.split("/").pop();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/leagues/${testId}`);
                const d = response.data;
                // console.log(d);

                if (d.result && d.leaguesData.length > 0) {
                    setLeaguesIds(d.leaguesData);
                } else {
                    setMessageError(true);
                    // console.log("array vide");;
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
                setMessageError(true);
            } finally {
                setLoading(false);
            }
        };

        if (testId) fetchData();
    }, [testId]);

    if (loading) return <div>Loading...</div>;
    if (messageError) return <div>Erreur lors du chargement des données.</div>;

    return (
        <div className="App">
            <div className="home football">
                <Navbar />
                <div className='headerContainer'>
                    {leaguesIds.length > 0 ? (
                        <>
                            <div className="competitionscontainer leaguesLeft">
                                {leaguesIds.map((el, index) => (
                                    <Competitions dataLeaguesId={el} key={index} />
                                ))}
                            </div>
                            <LeagueContainerDynamic dataLeaguesId={leaguesIds} />
                            <div className='matchTiketContainer'>ssooooss</div>
                        </>
                    ) : (
                        <div>Aucune ligue trouvée</div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;

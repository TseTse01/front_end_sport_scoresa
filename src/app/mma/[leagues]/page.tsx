"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Competitions from "../components/Competitions";
import { usePathname } from "next/navigation";
import Navbar from "@/app/football/components/Navbar";
import { MmaMatchData } from '../types/MmaMatchData'
import MmaleagueContainerDynamic from "./components/MmaleagueContainerDynamic";
const page = () => {
    const [dataLatestMatch, setDataLatestMatch] = useState<MmaMatchData[]>([]);
    const [messageError, setMessageError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    const category = pathname.split("/").pop();
    // console.log(typeof category);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/mmaLeagueLatestMatch/${category}`
                );
                const d = response.data;

                console.log(d, "la data dans la page mma here maan");

                if (d.result && d.latestMatches.length > 0) {
                    setDataLatestMatch(d.latestMatches);
                } else {
                    setMessageError(true);
                    console.log("array vide");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
                setMessageError(true);
            } finally {
                setLoading(false);
            }
        };

        if (category) fetchData();
    }, [category]);
    if (loading) return <div>Loading...</div>;
    if (messageError) return <div>Erreur lors du chargement des données.</div>;

    return (
        <div className="App">
            <div className="home football">
                <Navbar />
                <div className='headerContainer'>
                    {dataLatestMatch.length > 0 ? (
                        <>
                            <div className="competitionscontainer leaguesLeft">

                                <Competitions />

                            </div>
                            <MmaleagueContainerDynamic data={dataLatestMatch} />
                            <div className='matchTiketContainer'>ssooooss</div>
                        </>
                    ) : (
                        <div>Aucune ligue trouvée</div>
                    )}
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );;
};

export default page;

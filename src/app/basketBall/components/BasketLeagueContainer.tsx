import React from 'react';
import { useEffect, useState } from "react";
import NavbarLeagueContainer from "@/app/components/NavbarLeagueContainer";
import axios from "axios";
import { BasketMatchData } from '../types/BasketMatchData';
import Acb from './Acb';
import EuroBasket from './EuroBasket';
import EuroLeague from './EuroLeague';
import LegaA from './LegaA';
import Lnb from './Lnb';
import Nba from './Nba';
import Eurocup from "./EuroCup";



interface LeagueData {
    result: boolean;
    nba: BasketMatchData[];
    euroCup: BasketMatchData[];
    euroLeague: BasketMatchData[];
    lnb: BasketMatchData[];
    acb: BasketMatchData[];
    legaA: BasketMatchData[];
    euroBasket: BasketMatchData[];
}



const BasketLeagueContainer: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
    const [acb, setAcb] = useState<BasketMatchData[] | undefined>(undefined);
    const [euroBasket, setEuroBasket] = useState<BasketMatchData[] | undefined>(undefined);
    const [EuroCup, setEuroCup] = useState<BasketMatchData[] | undefined>(undefined);
    const [euroLeague, setEuroLeague] = useState<BasketMatchData[] | undefined>(undefined);
    const [legaA, setLegaA] = useState<BasketMatchData[] | undefined>(undefined);
    const [lnb, setLnb] = useState<BasketMatchData[] | undefined>(undefined);
    const [nba, setNba] = useState<BasketMatchData[] | undefined>(undefined);
    const [isTodayMatch, setIsTodayMatch] = useState<boolean>(false);
    // Fonction pour obtenir la date actuelle
    function getCurrentDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    // Fonction pour gérer le changement de date via l'input
    const handleDateChange = (newDate: string) => {
        setCurrentDate(newDate);
    };

    // Récupérer les données de l'API lorsque la date change
    useEffect(() => {
        const fetchData = async () => {
            // console.log(currentDate);

            try {
                const response = await axios.get<LeagueData>(`http://localhost:3000/basketball/${currentDate}`);
                const d = response.data;
                // console.log(d);

                if (d.result) {
                    setIsTodayMatch(false);
                    setAcb(d.acb);
                    setEuroBasket(d.euroBasket);
                    setEuroCup(d.euroCup);
                    setEuroLeague(d.euroLeague);
                    setLegaA(d.legaA);
                    setLnb(d.lnb);
                    setNba(d.nba);

                } else {
                    setIsTodayMatch(true);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData(); // Appel API à chaque changement de date
    }, [currentDate]); // Se déclenche à chaque changement de `currentDate`

    useEffect(() => {
        setCurrentDate(getCurrentDate());
    }, []);
    const NoMatch = <div>haliludia</div>;

    // console.log(dataSwedenShl, dataUsaNhl, dataFinlandLiga1, dataGermanyDel);

    return (
        <div>
            <NavbarLeagueContainer currentDate={currentDate} onDateChange={handleDateChange} />
            {isTodayMatch ? NoMatch : (
                <div>
                    {acb && <Acb data={acb} />}
                    {euroBasket && <EuroBasket data={euroBasket} />}
                    {EuroCup && <Eurocup data={EuroCup} />}
                    {/* {euroLeague && <EuroLeague data={euroLeague} />} */}
                    {legaA && <LegaA data={legaA} />}
                    {lnb && <Lnb data={lnb} />}
                    {nba && <Nba data={nba} />}
                </div>
            )}
        </div>
    );
};

export default BasketLeagueContainer;
import React, { useEffect, useState } from 'react';
import NavbarLeagueContainer from "@/app/components/NavbarLeagueContainer";
import axios from "axios";
import { MmaMatchData } from '../types/MmaMatchData';
import Bantamweight from './Bantamweight';
import Flyweight from './Flyweight';
import Lightweight from './Lightweight';
import WomensBantamweight from './WomensBantamweight';
import Middleweight from './Middleweight';
import Heavyweight from './Heavyweight';
import LightHeavyweight from './LightHeavyweight';
import Championship from '../../rugby/components/Championship';
interface LeagueData {
    result: boolean;
    Bantamweight: MmaMatchData[];
    Flyweight: MmaMatchData[];
    Lightweight: MmaMatchData[];
    Womens_Bantamweight: MmaMatchData[];
    Middleweight: MmaMatchData[];
    Heavyweight: MmaMatchData[];
    Light_Heavyweight: MmaMatchData[];
}
const MmaLeagueContainer = () => {
    const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
    const [bantamweight, setBantamweight] = useState<MmaMatchData[] | undefined>(undefined);
    const [flyweight, setFlyweight] = useState<MmaMatchData[] | undefined>(undefined);
    const [lightweight, SetLightweight] = useState<MmaMatchData[] | undefined>(undefined);
    const [womensBantamweight, setWomensBantamweight] = useState<MmaMatchData[] | undefined>(undefined);
    const [middleweight, setMiddleweight] = useState<MmaMatchData[] | undefined>(undefined);
    const [heavyweight, setHeavyweight] = useState<MmaMatchData[] | undefined>(undefined);
    const [lightHeavyweight, setLightHeavyweight] = useState<MmaMatchData[] | undefined>(undefined);
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
                const response = await axios.get<LeagueData>(`http://localhost:3000/mma`);
                const d = response.data;
                // console.log(d);

                if (d.result) {
                    setIsTodayMatch(false);
                    setBantamweight(d.Bantamweight);
                    setFlyweight(d.Flyweight);
                    SetLightweight(d.Lightweight);
                    setWomensBantamweight(d.Womens_Bantamweight);
                    setMiddleweight(d.Middleweight);
                    setHeavyweight(d.Heavyweight);
                    setLightHeavyweight(d.Light_Heavyweight);

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
        // Cette ligne devient redondante et peut être supprimée
        setCurrentDate(getCurrentDate());
    }, []);
    const NoMatch = <div>haliludia</div>;

    // console.log(dataSwedenShl, dataUsaNhl, dataFinlandLiga1, dataGermanyDel);

    return (
        <div className='leagueContainer mma-leagueCoontainer'>
            <div className="navbarLeague rugby-navbarleague">
                <NavbarLeagueContainer currentDate={currentDate} onDateChange={handleDateChange} />
            </div>
            <div>

                {isTodayMatch ? NoMatch : (
                    <div className='football-container mma '>
                        {bantamweight && <Bantamweight data={bantamweight} />}
                        {flyweight && <Flyweight data={flyweight} />}
                        {lightweight && <Lightweight data={lightweight} />}
                        {womensBantamweight && <WomensBantamweight data={womensBantamweight} />}
                        {middleweight && <Middleweight data={middleweight} />}
                        {heavyweight && <Heavyweight data={heavyweight} />}
                        {lightHeavyweight && <LightHeavyweight data={lightHeavyweight} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MmaLeagueContainer;
import React, { useEffect, useState } from 'react';
import NavbarLeagueContainer from "@/app/components/NavbarLeagueContainer";
import axios from "axios";
import { RugbyMatchData } from '../types/RugbyMatchData';
import Top14 from './Top14';
import ProD2 from './ProD2';
import Didi10 from './Didi10';
import Championship from './Championship';
import EuropeChampionship from './EuropeChampionship';
import WorldCup from './WorldCup';
interface LeagueData {
    result: boolean;
    top14: RugbyMatchData[];
    proD2: RugbyMatchData[];
    didi10: RugbyMatchData[];
    championship: RugbyMatchData[];
    europechampionship: RugbyMatchData[];
    worldcup: RugbyMatchData[];
}
const RugbyLeagueContainer: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
    const [top14, setTop14] = useState<RugbyMatchData[] | undefined>(undefined);
    const [proD2, setProD2] = useState<RugbyMatchData[] | undefined>(undefined);
    const [didi10, SetDidi10] = useState<RugbyMatchData[] | undefined>(undefined);
    const [championship, setChampionship] = useState<RugbyMatchData[] | undefined>(undefined);
    const [europechampionship, setEuropechampionship] = useState<RugbyMatchData[] | undefined>(undefined);
    const [worldcup, setWorldcup] = useState<RugbyMatchData[] | undefined>(undefined);
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
                const response = await axios.get<LeagueData>(`http://localhost:3000/rugby/${currentDate}`);
                const d = response.data;
                // console.log(d);

                if (d.result) {
                    setIsTodayMatch(false);
                    setTop14(d.top14);
                    setProD2(d.proD2);
                    SetDidi10(d.didi10);
                    setChampionship(d.championship);
                    setEuropechampionship(d.europechampionship);
                    setWorldcup(d.worldcup);

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
        <div>
            <NavbarLeagueContainer currentDate={currentDate} onDateChange={handleDateChange} />
            {isTodayMatch ? NoMatch : (
                <div>
                    {top14 && <Top14 data={top14} />}
                    {proD2 && <ProD2 data={proD2} />}
                    {didi10 && <Didi10 data={didi10} />}
                    {championship && <Championship data={championship} />}
                    {europechampionship && <EuropeChampionship data={europechampionship} />}
                    {worldcup && <WorldCup data={worldcup} />}
                </div>
            )}
        </div>
    );
};

export default RugbyLeagueContainer;
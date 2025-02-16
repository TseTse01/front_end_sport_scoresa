import { useEffect, useState } from "react";
import NavbarLeagueContainer from "@/app/football/components/NavbarLeagueContainer";
import CzechExtraliga from "./CzechExtraliga";
import FinlandLiga1 from "./FinlandLiga1";
import GermanyDel from "./GermanyDel";
import SwedenShl from "./SwedenShl";
import UsaNhl from "./UsaNhl";
import axios from "axios";
import { HockeyMatchData } from "../types/HockeyMatchData";

interface LeagueData {
    result: boolean;
    usaNhl: HockeyMatchData[];
    finlandLiga1: HockeyMatchData[];
    swedenShl: HockeyMatchData[];
    germanyDel: HockeyMatchData[];
    czechExtraliga: HockeyMatchData[];
}

const HockeyLeagueCotnainer: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
    const [dataSwedenShl, setDataSwedenShl] = useState<HockeyMatchData[] | undefined>(undefined);
    const [dataUsaNhl, setDataUsaNhl] = useState<HockeyMatchData[] | undefined>(undefined);
    const [dataFinlandLiga1, setDataFinlandLiga1] = useState<HockeyMatchData[] | undefined>(undefined);
    const [dataGermanyDel, setDataGermanyDel] = useState<HockeyMatchData[] | undefined>(undefined);
    const [dataCzechExtraliga, setDataCzechExtraliga] = useState<HockeyMatchData[] | undefined>(undefined);
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
                const response = await axios.get<LeagueData>(`http://localhost:3000/hockey/${currentDate}`);
                const d = response.data;
                // console.log(d);

                if (d.result) {
                    setIsTodayMatch(false);
                    setDataUsaNhl(d.usaNhl);
                    setDataFinlandLiga1(d.finlandLiga1);
                    setDataSwedenShl(d.swedenShl);
                    setDataGermanyDel(d.germanyDel);
                    setDataCzechExtraliga(d.czechExtraliga);

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
        <div className="leagueContainer hockeyLeague">
            <div className="navbarLeague hockeyvabarLeague">
                <NavbarLeagueContainer currentDate={currentDate} onDateChange={handleDateChange} />
            </div>
            {isTodayMatch ? NoMatch : (
                <div className="football-container hockeyont">
                    {dataSwedenShl && <SwedenShl data={dataSwedenShl} />}
                    {dataUsaNhl && <UsaNhl data={dataUsaNhl} />}
                    {dataFinlandLiga1 && <FinlandLiga1 data={dataFinlandLiga1} />}
                    {dataGermanyDel && <GermanyDel data={dataGermanyDel} />}
                    {dataCzechExtraliga && <CzechExtraliga data={dataCzechExtraliga} />}
                </div>
            )}

        </div>
    );
};

export default HockeyLeagueCotnainer;
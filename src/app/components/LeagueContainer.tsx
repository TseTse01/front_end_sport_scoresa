"use client"
import { useEffect, useState } from "react";
import EnglandContainer from "./EnglandContainer";
import NavbarLeagueContainer from "./NavbarLeagueContainer";
import axios from "axios";
import GeorgiaContainer from "./GeorgiaContainer";
import AllemagneContainer from "./AllemagneContainer";
import EspagneContainer from "./EspagneContainer";
import FranceContainer from "./FranceContainer";
import ItalyContainer from "./ItalyContainer";
import { MatchData } from "../types/MatchData";

interface LeagueData {
  result: boolean;
  deBundesliga: MatchData[];
  enPremierLeague: MatchData[];
  esLaliga: MatchData[];
  frLigue1Data: MatchData[];
  geErovnuliLiga: MatchData[];
  itSerieA: MatchData[];
}

const LeagueContainer: React.FC = () => {

  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
  const [dataPremierLeague, setDataPremierLeague] = useState<MatchData[] | undefined>(undefined);
  const [dataBundesLiga, setDataBundesLiga] = useState<MatchData[] | undefined>(undefined);
  const [dataLaLiga, SetDataLaliga] = useState<MatchData[] | undefined>(undefined);
  const [dataLigue1, SetDataLigue1] = useState<MatchData[] | undefined>(undefined);
  const [dataErovnuliLiga, setDataErovnuliLiga] = useState<MatchData[] | undefined>(undefined);
  const [dataSerieA, setDataSerieA] = useState<MatchData[] | undefined>(undefined);
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
      console.log(currentDate);

      try {
        const response = await axios.get<LeagueData>(`http://localhost:3000/matchToday/${currentDate}`);
        const d = response.data;

        if (d.result) {
          setIsTodayMatch(false);
          setDataBundesLiga(d.deBundesliga);
          setDataPremierLeague(d.enPremierLeague);
          SetDataLaliga(d.esLaliga);
          SetDataLigue1(d.frLigue1Data);
          setDataErovnuliLiga(d.geErovnuliLiga);
          setDataSerieA(d.itSerieA);

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

  return (
    <div className="leagueContainer">
      <NavbarLeagueContainer currentDate={currentDate} onDateChange={handleDateChange} />
      {isTodayMatch ? NoMatch : (
        <div className="football-container">
          {dataPremierLeague && <EnglandContainer data={dataPremierLeague} />}
          {dataBundesLiga && <AllemagneContainer data={dataBundesLiga} />}
          {dataLaLiga && <EspagneContainer data={dataLaLiga} />}
          {dataLigue1 && <FranceContainer data={dataLigue1} />}
          {dataErovnuliLiga && <GeorgiaContainer data={dataErovnuliLiga} />}
          {dataSerieA && <ItalyContainer data={dataSerieA} />}
        </div>
      )}
    </div>
  );
};

export default LeagueContainer;
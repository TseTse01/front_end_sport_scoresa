import { useEffect, useState } from "react";
import Card from "./Card";
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
  // 2. Définir les types des variables d'état avec useState
  const [dataPremierLeague, setDataPremierLeague] = useState<MatchData[] | undefined>(undefined);
  const [dataBundesLiga, setDataBundesLiga] = useState<MatchData[] | undefined>(undefined);
  const [dataLaLiga, SetDataLaliga] = useState<MatchData[] | undefined>(undefined);
  const [dataLigue1, SetDataLigue1] = useState<MatchData[] | undefined>(undefined);
  const [dataErovnuliLiga, setDataErovnuliLiga] = useState<MatchData[] | undefined>(undefined);
  const [dataSerieA, setDataSerieA] = useState<MatchData[] | undefined>(undefined);
  const [isTodayMatch, setIsTodayMatch] = useState<boolean>(false)
  // 3. Typage de la requête API avec axios
  useEffect(() => {
    axios
      .get<LeagueData>("http://localhost:3000/matchToday")
      .then((response) => {
        const d = response.data;
        if (d.result) {
          // 4. Mettre à jour les états avec les données récupérées
          setDataBundesLiga(d.deBundesliga);
          setDataPremierLeague(d.enPremierLeague);
          SetDataLaliga(d.esLaliga);
          SetDataLigue1(d.frLigue1Data);
          setDataErovnuliLiga(d.geErovnuliLiga);
          setDataSerieA(d.itSerieA);
        } else {
          setIsTodayMatch(true)
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);
  const NoMatch = (<div>
    haliludia
  </div>)


  return (
    <div className="leagueContainer">
      <NavbarLeagueContainer />
      {isTodayMatch ? (NoMatch) : (
        <div>
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
import React from 'react';
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
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
interface LeagueData {
    result: boolean;
    deBundesliga: MatchData[];
    enPremierLeague: MatchData[];
    esLaliga: MatchData[];
    frLigue1Data: MatchData[];
    geErovnuliLiga: MatchData[];
    itSerieA: MatchData[];
}

const FavorisLeagueContainer: React.FC = () => {


    const [dataPremierLeague, setDataPremierLeague] = useState<MatchData[] | undefined>(undefined);
    const [dataBundesLiga, setDataBundesLiga] = useState<MatchData[] | undefined>(undefined);
    const [dataLaLiga, SetDataLaliga] = useState<MatchData[] | undefined>(undefined);
    const [dataLigue1, SetDataLigue1] = useState<MatchData[] | undefined>(undefined);
    const [dataErovnuliLiga, setDataErovnuliLiga] = useState<MatchData[] | undefined>(undefined);
    const [dataSerieA, setDataSerieA] = useState<MatchData[] | undefined>(undefined);
    const [isTodayMatch, setIsTodayMatch] = useState<boolean>(false);
    const fullIds = useSelector((state: RootState) => state.counter.value.ids)


    useEffect(() => {
        const fetchDataWithId = async () => {

            if (fullIds.length !== 0) {
                try {
                    const response = await axios.get<LeagueData>(`http://localhost:3000/favoris/${fullIds.join("-")}`);
                    const d = response.data
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
                    console.error("erreur lors de la recuperationde donner avec ID", error);

                }
            } else {
                console.log("on a pas de id Vous avez rien encore dans votre favoris");

            }
        }
        fetchDataWithId()

    }, [fullIds])


    const NoMatch = <div>haliludia</div>;


    return (
        <div className="leagueContainer">
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

export default FavorisLeagueContainer;
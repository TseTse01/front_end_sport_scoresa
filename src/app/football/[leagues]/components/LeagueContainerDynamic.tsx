import React, { useEffect, useState } from "react";
import NavbarLeague from "./NavbarLeague";
import TodayMatch from "./TodayMatch";
import Scheduled from "./Scheduled";
import LatestScore from "./LatestScore";
import Standings from "./Standings";
import { idsLeague } from "../idsLeague";
import { useSelector } from "react-redux";
import { RootState } from "../../../GlobalRedux/store";
import { Match } from "../propsMatchData";
import axios from "axios";
interface propsIdsAndName {
    dataLeaguesId: idsLeague[];
}

const LeagueContainerDynamic: React.FC<propsIdsAndName> = ({
    dataLeaguesId,
}) => {
    // const [leagueId, setLeagueId] = useState<string>("697");
    const [dataLatestMatchs, setDataLatestMatchs] = useState<Match[] | undefined>(
        undefined
    );
    const idLeague = useSelector(
        (state: RootState) => state.counter.value.idsLeague
    );
    const firstLeagueId = dataLeaguesId[0].id.toString();


    useEffect(() => {
        const fetchData = async () => {
            // console.log(idLeague, "idsss");

            try {
                const response = await axios.get(
                    `http://localhost:3000/latestMatch/${idLeague.length > 0 ? idLeague[0].toString() : firstLeagueId
                    }`
                );
                const d = response.data;
                // console.log(d, " si on recuperr qq chose");

                if (d.result) {
                    setDataLatestMatchs(d.matches);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, [idLeague]);
    // console.log(dataLatestMatchs && dataLatestMatchs[0]);

    return (
        <div className="matchsContainer">
            <div className="leagueContainer">
                {dataLatestMatchs && <NavbarLeague data={dataLatestMatchs[0]} />}
                <TodayMatch />
                <Scheduled />
                {dataLatestMatchs && <LatestScore data={dataLatestMatchs} />}
                {dataLatestMatchs && (
                    <Standings
                        leagueId={dataLatestMatchs[0].league.id}
                        leagueSeason={dataLatestMatchs[0].league.season}
                    />
                )}
            </div>
        </div>
    );
};

export default LeagueContainerDynamic;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { standingsProprs } from '../PropsStandings';
interface leagueIdAndSeason {
    leagueId: number,
    leagueSeason: number,
}
const Standings: React.FC<leagueIdAndSeason> = ({ leagueId, leagueSeason }) => {
    const [dataStandings, setDataStandings] = useState<standingsProprs[] | undefined>(
        undefined
    );
    useEffect(() => {
        const fetchData = async () => {
            // console.log(idLeague, "idsss");

            try {
                const response = await axios.get(
                    `http://localhost:3000/standings/${leagueId.toString()}/${leagueSeason.toString()}`
                );
                const d = response.data;
                console.log(d, " si on recuperr qq chose dans standings");

                // if (d.result) {
                //     setDataStandings(d.matches);
                // }


            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, [leagueId, leagueSeason]);
    return (
        <div className='football-container league'>
            <div>
                <h3>Standings</h3>
            </div>
            <div className='matches'></div>

        </div>
    );
};

export default Standings;
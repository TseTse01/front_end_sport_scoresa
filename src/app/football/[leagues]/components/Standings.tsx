import React, { useEffect, useState } from 'react';
import axios from "axios";
import { standingsProprs } from '../PropsStandings';
import DynamicImage from './DynamicImage';
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

                if (d.result) {
                    setDataStandings(d.data);
                }


            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, [leagueId, leagueSeason]);
    return (
        <div className="standings-container">
            <h2>League Standings</h2>
            <table className="standings-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>WO</th>
                        <th>L</th>
                        <th>LO</th>
                        <th>G</th>
                        <th>PTS</th>
                        <th>FORM</th>
                    </tr>
                </thead>
                <tbody>
                    {dataStandings && dataStandings.map((team) => (
                        <tr key={team.rank}>
                            <td>{team.rank}</td>
                            <td className="team-info">
                                <DynamicImage src={team.team.logo} alt={`${team.team.name} + logo`} className='logoStandingsFoot' />
                                {team.team.name}
                            </td>
                            <td>{team.all.played}</td>
                            <td>{team.all.win}</td>
                            <td>{team.all.draw}</td>
                            {/* <td>{team.all.lose.total}</td> */}
                            {/* <td>{team.games.lose_overtime.total}</td> */}
                            <td>
                                {team.all.goals.for}:{team.all.goals.against}
                            </td>
                            <td>{team.points}</td>
                            <td>{team.form}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standings;
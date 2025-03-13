import React, { useEffect, useState } from 'react';
import { Match } from './propsMatchData';
import axios from "axios";
import { standingProps } from '../props/standingsProps'
interface LeagueData {
    data: Match;
}
const Standings: React.FC<LeagueData> = ({ data }) => {
    const [dataStendings, setDataStendings] = useState<standingProps[] | undefined>(undefined);
    const leagueId = data.league.id;
    const season = data.league.season.toString();;
    // console.log(leagueId);

    useEffect(() => {

        const fetchData = async () => {
            // console.log(idLeague, "idsss");

            try {
                const response = await axios.get(`http://localhost:3000/hockeyStandings/${leagueId}/
                    ${season}`);
                const d = response.data;
                console.log(d, " of standigs");


                if (d.result) {
                    setDataStendings(d.data)

                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();


    }, [leagueId])

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
                    {dataStendings && dataStendings.map((team) => (
                        <tr key={team.position}>
                            <td>{team.position}</td>
                            <td className="team-info">
                                <img
                                    src={team.team.logo}
                                    alt={team.team.name}
                                    className="team-logo"
                                />
                                {team.team.name}
                            </td>
                            <td>{team.games.played}</td>
                            <td>{team.games.win.total}</td>
                            <td>{team.games.win_overtime.total}</td>
                            <td>{team.games.lose.total}</td>
                            <td>{team.games.lose_overtime.total}</td>
                            <td>
                                {team.goals.for}:{team.goals.against}
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
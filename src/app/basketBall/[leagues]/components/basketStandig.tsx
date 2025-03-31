import React, { useEffect, useState } from 'react';
import axios from "axios";
import { standingProps } from '../props/standingPropsBasket';
interface LeagueData {
    leagueId: string;
    season: string
}
const basketStandig: React.FC<LeagueData> = ({ leagueId, season }) => {
    const [dataStendings, setDataStendings] = useState<standingProps[] | undefined>(undefined);
    const [isTrue, setIsTrue] = useState<boolean>(false);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/hockeyStandings/${leagueId}/
                    ${season}`);
                const d = response.data;

                if (d.result && d.data.length > 0) {
                    setDataStendings(d.data)
                    setIsTrue(true)
                }
            } catch (error) {
                console.log("Erreur lors de la récupération des données:", error);
                setIsTrue(false)
            }
        };

        fetchData();


    }, [leagueId])
    return (
        <>
            {isTrue &&
                <div className="standings-container">
                    <h2>League Standings</h2>
                    <table className="standings-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>MP</th>
                                <th>W</th>
                                <th>L</th>
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
                                    <td>{team.games.lose.total}</td>
                                    <td>
                                        {team.points.for}:{team.points.against}
                                    </td>
                                    <td>{team.games.played}</td>
                                    <td>{team?.form?.split('').join(' ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
};

export default basketStandig;
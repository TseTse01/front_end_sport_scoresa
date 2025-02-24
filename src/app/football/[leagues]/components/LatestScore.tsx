import React, { useEffect, useState } from 'react';
import axios from "axios";
import { propsMatchData } from '../propsMatchData';
import FootballLeagueMatch from './FootballLeagueMatch';
const LatestScore: React.FC = () => {
    const [leagueId, setLeagueId] = useState<string>("697");
    const [dataLatestMatchs, setDataLatestMatchs] = useState<propsMatchData[] | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(`http://localhost:3000/latestMatch/${leagueId}`);
                const d = response.data;
                if (d.reslut) {
                    setDataLatestMatchs(d.matches)
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, [leagueId])
    return (
        <div className='matchContainer'>
            <FootballLeagueMatch data={dataLatestMatchs} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
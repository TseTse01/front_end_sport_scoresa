import React, { useEffect, useState } from 'react';
import NavbarLeague from './NavbarLeague';
import TodayMatch from './TodayMatch';
import Scheduled from './Scheduled';
import LatestScore from './LatestScore';
import Standings from './Standings';
import { idsLeague } from './idsLeague';
import { useSelector } from 'react-redux';
import { RootState } from '../../../GlobalRedux/store';
import { Match } from './propsMatchData';
import axios from "axios";
interface propsIdsAndName {
    dataLeaguesId: idsLeague[];
}


const LeagueContainerDynamic: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    // const [leagueId, setLeagueId] = useState<string>("697");
    const [dataLatestMatchs, setDataLatestMatchs] = useState<Match[] | undefined>(undefined);
    const idLeague = useSelector((state: RootState) => state.counter.value.idsLeague)
    const firstLeagueId = dataLeaguesId[0].id.toString()
    // console.log(dataLeaguesId[0].id.toString(), "dynamic");

    useEffect(() => {

        const fetchData = async () => {
            // console.log(idLeague, "idsss");

            try {
                const response = await axios.get(`http://localhost:3000/latestMatchHockey/${idLeague.length > 0 ? idLeague[0].toString() : firstLeagueId}`);
                const d = response.data;
                // console.log(d, " of de");


                if (d.result) {
                    setDataLatestMatchs(d.matches)
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();


    }, [idLeague])

    return (
        <div className='matchsContainer'>
            <div className="leagueContainer">
                {dataLatestMatchs && <NavbarLeague data={dataLatestMatchs[0]} />}
                <TodayMatch />
                <Scheduled />
                {dataLatestMatchs && <LatestScore data={dataLatestMatchs} />}
                {dataLatestMatchs && <Standings data={dataLatestMatchs[0]} />}
            </div>
        </div>
    );
};

export default LeagueContainerDynamic;
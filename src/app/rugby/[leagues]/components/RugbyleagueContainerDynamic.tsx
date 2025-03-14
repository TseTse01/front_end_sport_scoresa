import React, { useEffect, useState } from 'react';
import axios from "axios";
import RugbtNavbarLeague from './RugbtNavbarLeague';
import TodayMatch from './TodayMatch';
import Scheduled from './Scheduled';
import LatestScore from './LatestScore';
import Standings from './Standings';
import { idsLeague } from '../props/idsLeague';
import { useSelector } from 'react-redux';
import { RootState } from '../../../GlobalRedux/store';
import { rugbyleagueMatchProps } from '../props/RugbyLeagueMatchProps';

interface propsIdsAndName {
    dataLeaguesId: idsLeague[];
}

const RugbyleagueContainerDynamic: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    const [dataLatestMatchs, setDataLatestMatchs] = useState<rugbyleagueMatchProps[] | undefined>(undefined);
    const firstLeagueId = dataLeaguesId[0].id.toString()
    const idLeague = useSelector((state: RootState) => state.counter.value.idsLeague)

    useEffect(() => {

        const fetchData = async () => {
            // console.log(idLeague, "idsss");
            // r
            try {
                const response = await axios.get(`http://localhost:3000/rougbytlatestMatch/${idLeague[0] ? idLeague[0].toString() : firstLeagueId}`);
                const d = response.data;


                if (d.result) {
                    // console.log(d.matches, "rugbyleaguedynamic maan ++");
                    setDataLatestMatchs(d.matches)
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();


    }, [idLeague,])
    return (
        <div className='matchsContainer'>
            <div className="leagueContainer">
                {dataLatestMatchs && <RugbtNavbarLeague data={dataLatestMatchs[0]} />}
                <TodayMatch />
                <Scheduled />
                {dataLatestMatchs && <LatestScore data={dataLatestMatchs} />}
                {dataLatestMatchs && <Standings leagueId={dataLatestMatchs[0].league.id.toString()} season={dataLatestMatchs[0].league.season.toString()} />}
            </div>
        </div>
    );
};

export default RugbyleagueContainerDynamic;
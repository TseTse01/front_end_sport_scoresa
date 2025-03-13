import React, { useEffect, useState } from 'react';
import NavbarLeague from './BasketNavbarLeague';
import BasketTodaymatch from './BasketTodaymatch';
import BasketScheduled from './BasketScheduled';
import BasketLatestMatch from './BasketLatestMatch';
import BasketStandings from './basketStandig';
import { idsLeague } from '../props/idsLeague';
import { useSelector } from 'react-redux';
import { RootState } from '../../../GlobalRedux/store';
import { BasketMatchData } from '../../types/BasketMatchData';

import axios from "axios";
interface propsIdsAndName {
    dataLeaguesId: idsLeague[];
}


const LeagueContainerDynamic: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {

    const [dataLatestMatchs, setDataLatestMatchs] = useState<BasketMatchData[] | undefined>(undefined);
    const idLeague = useSelector((state: RootState) => state.counter.value.idsLeague)
    const firstLeagueId = dataLeaguesId[0].id.toString()

    useEffect(() => {

        const fetchData = async () => {
            // console.log(idLeague, "idsss");
            // r
            try {
                const response = await axios.get(`http://localhost:3000/basketballLeagueLatestMatch/${idLeague[0] ? idLeague[0].toString() : firstLeagueId}`);
                const d = response.data;

                // console.log(d, "basketdynalic maan ++");

                if (d.result) {
                    setDataLatestMatchs(d.matches)
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();


    }, [idLeague, dataLeaguesId])

    return (
        <div className='matchsContainer'>
            <div className="leagueContainer">
                {dataLatestMatchs && <NavbarLeague data={dataLatestMatchs[0]} />}
                <BasketTodaymatch />
                <BasketScheduled />
                {dataLatestMatchs && <BasketLatestMatch data={dataLatestMatchs} />}
                <BasketStandings />
            </div>
        </div>
    );
};

export default LeagueContainerDynamic;
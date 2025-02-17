import React from 'react';
import NavbarLeague from './NavbarLeague';
import TodayMatch from './TodayMatch';
import Scheduled from './Scheduled';
import LatestScore from './LatestScore';
import Standings from './Standings';
import { idsLeague } from '../idsLeague';
interface propsIdsAndName {
    dataLeaguesId: idsLeague[];
}

const LeagueContainerDynamic: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    return (
        <div className='leagueContainerDynamic'>
            <NavbarLeague data={dataLeaguesId[0]} />
            <TodayMatch />
            <Scheduled />
            <LatestScore />
            <Standings />
        </div>
    );
};

export default LeagueContainerDynamic;
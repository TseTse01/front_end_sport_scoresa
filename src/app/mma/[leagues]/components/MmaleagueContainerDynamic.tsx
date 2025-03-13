import React from 'react';
import { MmaMatchData } from '../../types/MmaMatchData'
import MmaNavbarLeague from './MmaNavbarLeague';
import TodayMatch from './TodayMatch';
import Scheduled from './Scheduled';
import LatestScore from './LatestScore';
import Standings from './Standings';
interface data {
    data: MmaMatchData[];
}
const MmaleagueContainerDynamic: React.FC<data> = ({ data }) => {
    return (
        <div className='matchsContainer'>
            <div className="leagueContainer">
                <MmaNavbarLeague data={data} />
                <TodayMatch />
                <Scheduled />
                <LatestScore data={data} />
                <Standings />
            </div>
        </div>
    );
};

export default MmaleagueContainerDynamic;
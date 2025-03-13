import React from 'react';
import { rugbyleagueMatchProps } from '../props/RugbyLeagueMatchProps';
import RugbyLeagueMatch from './RugbyLeagueMatch'
interface LeagueData {
    data: rugbyleagueMatchProps[];
}
const LatestScore: React.FC<LeagueData> = ({ data }) => {
    return (
        <div className='football-container league'>
            <h3>Latest Scores</h3>
            <RugbyLeagueMatch data={data} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
import React from 'react';
import { rugbyleagueMatchProps } from '../props/RugbyLeagueMatchProps';
import RugbyLeagueMatch from './RugbyLeagueMatch'
interface LeagueData {
    data: rugbyleagueMatchProps[];
}
const LatestScore: React.FC<LeagueData> = ({ data }) => {
    // console.log(data, "this is latesscore rugby");

    return (
        <div className='football-container league'>
            <div className='latestMatchTitle'>
                <h3>Latest Scores</h3>
            </div>
            <RugbyLeagueMatch data={data} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
import React from 'react';
import { Match } from './propsMatchData';
import HockeyLeagueMatch from './HockeyLeagueMatch'
interface LeagueData {
    data: Match[];
}
const LatestScore: React.FC<LeagueData> = ({ data }) => {

    return (
        <div className='football-container league'>
            <h3>Latest Scores</h3>
            <HockeyLeagueMatch data={data} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
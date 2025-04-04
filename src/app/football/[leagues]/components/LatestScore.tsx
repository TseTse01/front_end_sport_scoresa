import React, { useEffect, useState } from 'react';
import { Match } from '../propsMatchData';
import FootballLeagueMatch from './FootballLeagueMatch';
interface LeagueData {
    data: Match[];
}
const LatestScore: React.FC<LeagueData> = ({ data }) => {

    return (
        <div className='football-container league'>
            <h3>Latest Scores</h3>
            <FootballLeagueMatch data={data} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
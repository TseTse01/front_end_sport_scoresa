import React from 'react';
import { BasketMatchData } from '../../types/BasketMatchData';
import BasketLeagueMatch from './BasketLeagueMatch'
interface LeagueData {
    data: BasketMatchData[];
}
const LatestScore: React.FC<LeagueData> = ({ data }) => {
    // console.log(data[0]);

    return (
        <div className='football-container league'>
            <div className='latestMatchTitle'>
                <h3>Latest Scores</h3>
            </div>
            <BasketLeagueMatch data={data} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
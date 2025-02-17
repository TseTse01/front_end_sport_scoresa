import React from 'react';
import FootballMatchContainer from '../../types/FootballMatchContainer';

const TodayMatch = () => {
    return (
        <div className='matchContainer'>
            <div>
                <h3>Today's Matches</h3>
            </div>
            <div className='matches'></div>
            {/* <FootballMatchContainer data={data} /> */}
        </div>
    );
};

export default TodayMatch;
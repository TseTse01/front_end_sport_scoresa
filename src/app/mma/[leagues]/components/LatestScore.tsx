import React, { useState } from 'react';
import { MmaMatchData } from '../../types/MmaMatchData';
import MmaMatchContainer from '../../components/MmaMatchContainer';
interface data {
    data: MmaMatchData[];
}
const LatestScore: React.FC<data> = ({ data }) => {
    // console.log(data, 'data');


    return (
        <div className='football-container league'>
            <h3>Latest Scores</h3>
            <MmaMatchContainer data={data} />
            <div className='matches'></div>
        </div>
    );
};

export default LatestScore;
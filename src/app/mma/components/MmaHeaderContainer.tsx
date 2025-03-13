import React from 'react';
import MmaLeagueContainer from './MmaLeagueContainer';
import Competitions from './Competitions';
const MmaHeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <div className='competitionscontainer'
                style={{ color: "red" }}>
                <Competitions />

            </div>
            <div className='matchsContainer'>
                <MmaLeagueContainer />
            </div>
            <div className='matchTiketContainer'>ssooooss</div>
        </div>
    );
};

export default MmaHeaderContainer;
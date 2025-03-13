import React from 'react';
import RugbyLeagueContainer from './RugbyLeagueContainer'
import CompetitionsRugby from './CompetitionsRugby';

const RugbyHeaderContainer = () => {

    return (
        <div className='headerContainer'>
            <div className='competitionscontainer'
            >
                <CompetitionsRugby />
            </div>
            <div className='matchsContainer'>
                <RugbyLeagueContainer />
            </div>
            <div className='matchTiketContainer'>ssooooss</div>
        </div>
    );
};

export default RugbyHeaderContainer;
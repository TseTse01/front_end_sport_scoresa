import React from 'react';
import BasketLeagueContainer from './BasketLeagueContainer';
import Competitions from './Competitions';

const BasketballHeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <div className='competitionscontainer'>
                <Competitions />
            </div>
            <div className='matchsContainer'>
                <BasketLeagueContainer />
            </div>
            <div className='matchTiketContainer'>ssooooss</div>
        </div>
    );
};

export default BasketballHeaderContainer;

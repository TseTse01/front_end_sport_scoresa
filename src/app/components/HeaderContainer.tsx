import React from 'react';
import Competitions from './Competitions';
import LeagueContainer from './LeagueContainer';

const HeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <div className='competitionscontainer'>
                <Competitions />
            </div>
            <div className='matchsContainer'><LeagueContainer />
            </div>
            <div className='matchTiketContainer'></div>
        </div>
    );
};

export default HeaderContainer;
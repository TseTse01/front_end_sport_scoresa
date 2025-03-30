import React from 'react';
import FavorisLeagueContainer from './FavorisLeagueContainer';

const FavorisHeader = () => {
    return (
        <div className='headerContainer'>
            <div className='competitionscontainer'>
                <p style={{ color: "red" }}>+teams</p>
            </div>
            <div className='matchsContainer'><FavorisLeagueContainer />
            </div>
            <div className='matchTiketContainer'>ssooooss</div>
        </div>
    );
};

export default FavorisHeader;
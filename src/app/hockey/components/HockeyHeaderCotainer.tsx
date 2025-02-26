import React from 'react';
import HockeyLeagueCotnainer from './HockeyLeagueCotnainer';
import CompetitionsHockey from './CompetitionsHockey';
const HockeyHeaderCotainer = () => {
    return (
        <div className='headerContainer'>
            <div className='competitionscontainer'
                style={{ color: "red" }}>
                {/* <Competitions /> */}
                <CompetitionsHockey />
            </div>
            <div className='matchsContainer'>
                <HockeyLeagueCotnainer />
            </div>
            <div className='matchTiketContainer'>ssooooss</div>
        </div>
    );
};

export default HockeyHeaderCotainer;
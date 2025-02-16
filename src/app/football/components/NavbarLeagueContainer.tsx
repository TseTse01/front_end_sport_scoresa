import React from 'react';

interface NavbarLeagueContainerProps {
    currentDate: string;
    onDateChange: (newDate: string) => void; // Typage de la fonction de callback
}

const NavbarLeagueContainer: React.FC<NavbarLeagueContainerProps> = ({ currentDate, onDateChange }) => {
    return (
        <div className="navbarLeagueContainer">
            <div className='left'>
                <div className="navlink">All</div>
                <div className="navlink">Live</div>
                <div className="navlink">ODDS</div>
                <div className="navlink">Finished</div>
                <div className="navlink">Scheduled</div>
            </div>
            <div className='right'>
                <input
                    type="date" value={currentDate}
                    onChange={(e) => onDateChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default NavbarLeagueContainer;
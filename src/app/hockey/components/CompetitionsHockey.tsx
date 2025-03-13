import React from 'react';
import Link from 'next/link';
const CompetitionsHockey = () => {
    return (
        <div className="footCompetitionsContainer">
            <div className="competitions">
                <p className="flag-fr"></p>
                <h6><Link href="/hockey/france">France</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-usa"></p>
                <h6><Link href="/hockey/usa">NHL</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-fi"></p>
                <h6><Link href="/hockey/finland">Liiga</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-de"></p>
                <h6><Link href="/hockey/germany">DHL</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-sw"></p>
                <h6><Link href="/hockey/sweden">SHL</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-cz"></p>
                <h6><Link href="/hockey/Czech republic">ExtraLiga</Link></h6>
            </div>

        </div>
    );
};

export default CompetitionsHockey;
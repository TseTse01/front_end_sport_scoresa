import React from 'react';
import Link from 'next/link';
const CompetitionsHockey = () => {
    return (
        <div className="footCompetitionsContainer">
            <div className="competitions">
                <p className="flag-us"></p>
                <h6><Link href="/hockey/us">NHL</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-fi"></p>
                <h6><Link href="/hockey/Finland">Liiga</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-de"></p>
                <h6><Link href="/hockey/Germany">DHL</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-cz"></p>
                <h6><Link href="/hockey/Sweden">SHL</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-de"></p>
                <h6><Link href="/hockey/Czech republic">ExtraLiga</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-de"></p>
                <h6><Link href="/hockey/France">France</Link></h6>
            </div>
        </div>
    );
};

export default CompetitionsHockey;
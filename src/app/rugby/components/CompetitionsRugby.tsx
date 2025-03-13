import React from 'react';
import Link from 'next/link';
const CompetitionsRugby = () => {
    return (
        <div className="footCompetitionsContainer">
            <div className="competitions">
                <p className="flag-fr"></p>
                <h6><Link href="/rugby/france">Top 14</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-it"></p>
                <h6><Link href="/rugby/france">Pro D2</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-ge"></p>
                <h6><Link href="/rugby/georgia">Didi 10</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-eu"></p>
                <h6><Link href="/rugby/europe">Championship</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-eu"></p>
                <h6><Link href="/rugby/europe">WorldCup</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-eu"></p>
                <h6><Link href="/rugby/europe">Championship Europe</Link></h6>
            </div>
        </div>
    );
};

export default CompetitionsRugby;
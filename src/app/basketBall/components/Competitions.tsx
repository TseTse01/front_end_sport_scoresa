import React from 'react';
import Link from 'next/link';
const Competitions = () => {
    return (
        <div className="footCompetitionsContainer">
            <div className="competitions">
                <p className="flag-fr"></p>
                <h6><Link href="/basketBall/france">LNB</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-it"></p>
                <h6><Link href="/basketBall/italy">Lega A</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-es"></p>
                <h6><Link href="/basketBall/spain">ACB</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-usa"></p>
                <h6><Link href="/basketBall/usa">NBA</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-eu"></p>
                <h6><Link href="/basketBall/europe">EuroBasket</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-eu"></p>
                <h6><Link href="/basketBall/europe">EuroCup</Link></h6>
            </div>
            <div className="competitions">
                <p className="flag-eu"></p>
                <h6><Link href="/basketBall/europe">EuroLeague</Link></h6>
            </div>
        </div>
    );
};

export default Competitions;
import React from 'react';
import Link from 'next/link';

const Competitions = () => {
    return (
        <div className="footCompetitionsContainer">
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Bantamweight">Bantamweight</Link></h6>
            </div>
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Flyweight">Flyweight</Link></h6>
            </div>
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Women's Bantamweight">Womens Bantamweight</Link></h6>
            </div>
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Heavyweight">Heavyweight</Link></h6>
            </div>
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Light Heavyweight">Light_Heavyweight</Link></h6>
            </div>
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Lightweigh">Lightweigh</Link></h6>
            </div>
            <div className="competitions">
                <p className="mmadefaultlogo"></p>
                <h6><Link href="/mma/Middleweight">Middleweight</Link></h6>
            </div>
        </div>
    );
};

export default Competitions;
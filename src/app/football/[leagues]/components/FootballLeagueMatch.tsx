import React, { useState } from "react";
import DynamicImage from "./DynamicImage";
import Star from "../../components/Star";
import { Match } from '../propsMatchData';
import Card from "./Card";

interface LeagueData {
    data: Match[];
}

const FootballLeagueMatch: React.FC<LeagueData> = ({ data }) => {
    const [visibleCount, setVisibleCount] = useState(10);
    const totalMatches = data?.length || 0;

    // Fonction pour afficher 15 matchs de plus
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 15);

    };

    // Fonction pour revenir à 15 matchs
    const handleShowLess = () => {
        setVisibleCount(15);
    };

    return (
        <div className="navbarCardContainer">
            <div className="items">
                <div className="left">
                    <Star />
                    <div className="image">
                        <DynamicImage
                            src={data[0]?.league.flag}
                            alt={`flag ${data && data[0]?.league.country}`}
                        />
                    </div>
                    <div className="leagueName">
                        <p>
                            {data && data[0]?.league.country} : {data && data[0]?.league.name}
                        </p>
                    </div>
                </div>
                <div className="right">
                    <p>Standings</p>
                </div>
            </div>

            <div className="cardsFootball">
                {data?.slice(0, visibleCount).map((el, index) => (
                    <Card data={el} key={index} />
                ))}
            </div>

            <div className="showMoreButtons">
                {totalMatches > visibleCount ? (
                    <button onClick={handleShowMore}>Voir plus de matchs</button>
                ) : (
                    <button onClick={handleShowLess}>Réduire à 15 matchs</button>
                )}
            </div>
        </div>
    );
};

export default FootballLeagueMatch;
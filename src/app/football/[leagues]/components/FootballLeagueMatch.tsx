import React from "react";
import DynamicImage from "./DynamicImage";
import Star from "../../components/Star";
import { propsMatchData } from '../propsMatchData';
interface leagueData {
    data?: propsMatchData[];
}
const FootballLeagueMatch: React.FC<leagueData> = ({ data }) => {
    console.log(data);

    return (
        <div className="navbarCardContainer">
            <div className="items">
                <div
                    className="left"
                // onClick={handleRecoverId}
                >
                    <Star />
                    <div className="image">
                        <DynamicImage
                            src={data ? data[0].matches[0].league.flag : '/images/default-flag.png'}
                            alt={`flag ${data && data[0].matches[0].league.country}`}
                        />
                    </div>
                    <div className="leagueName">
                        <p>
                            {data && data[0].matches[0].league.country} : {data && data[0].matches[0].league.name}
                        </p>
                    </div>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className="cardsFootball">
                {/* {data && data.map((el, index) => (
                    <Card data={el} key={index} />
                ))} */}
            </div>
        </div>
    );
};

export default FootballLeagueMatch;

import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface EuroLeagueProps {
    data: BasketMatchData[];
}
const EuroLeague: React.FC<EuroLeagueProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />
        </div>
    );
};

export default EuroLeague;
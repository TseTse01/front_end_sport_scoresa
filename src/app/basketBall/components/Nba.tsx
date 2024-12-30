import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface NbaProps {
    data: BasketMatchData[];
}
const Nba: React.FC<NbaProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />

        </div>
    );
};

export default Nba;
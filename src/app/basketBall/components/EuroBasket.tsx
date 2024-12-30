import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface EuroBasketProps {
    data: BasketMatchData[];
}
const EuroBasket: React.FC<EuroBasketProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />
        </div>
    );
};

export default EuroBasket;
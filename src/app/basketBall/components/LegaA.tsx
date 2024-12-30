import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface LegaAProps {
    data: BasketMatchData[];
}
const LegaA: React.FC<LegaAProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />
        </div>
    );
};

export default LegaA;
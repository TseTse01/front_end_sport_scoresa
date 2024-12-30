import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface LnbProps {
    data: BasketMatchData[];
}
const Lnb: React.FC<LnbProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />

        </div>
    );
};

export default Lnb;
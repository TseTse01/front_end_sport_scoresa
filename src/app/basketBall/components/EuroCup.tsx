import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface EuroCupProps {
    data: BasketMatchData[];
}
const EuroCup: React.FC<EuroCupProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />

        </div>
    );
};

export default EuroCup;
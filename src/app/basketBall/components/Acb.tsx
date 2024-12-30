import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import BasketMatchContainer from "./BasketMatchContainer"
interface AcbProps {
    data: BasketMatchData[];
}
const Acb: React.FC<AcbProps> = ({ data }) => {
    return (
        <div>
            <BasketMatchContainer data={data} />

        </div>
    );
};

export default Acb;
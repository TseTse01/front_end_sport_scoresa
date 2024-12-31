import React from 'react';
import RugbyMatchContainer from './RugbyMatchContainer';
import { RugbyMatchData } from '../types/RugbyMatchData';
interface Didi10Props {
    data: RugbyMatchData[];
}
const Didi10: React.FC<Didi10Props> = ({ data }) => {
    return (
        <div>
            <RugbyMatchContainer data={data} />
            didi10
        </div>
    );
};

export default Didi10;
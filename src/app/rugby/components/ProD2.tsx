import React from 'react';
import RugbyMatchContainer from './RugbyMatchContainer';
import { RugbyMatchData } from '../types/RugbyMatchData';
interface ProD2Props {
    data: RugbyMatchData[];
}
const ProD2: React.FC<ProD2Props> = ({ data }) => {
    return (
        <div>
            <RugbyMatchContainer data={data} />
            ProD2
        </div>
    );
};

export default ProD2;
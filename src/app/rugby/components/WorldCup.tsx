import React from 'react';
import RugbyMatchContainer from './RugbyMatchContainer';
import { RugbyMatchData } from '../types/RugbyMatchData';
interface WorldCupProps {
    data: RugbyMatchData[];
}
const WorldCup: React.FC<WorldCupProps> = ({ data }) => {
    return (
        <div>
            <RugbyMatchContainer data={data} />
        </div>
    );
};

export default WorldCup;
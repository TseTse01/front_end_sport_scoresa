import React from 'react';
import RugbyMatchContainer from './RugbyMatchContainer';
import { RugbyMatchData } from '../types/RugbyMatchData';
interface ChampionshipProps {
    data: RugbyMatchData[];
}
const Championship: React.FC<ChampionshipProps> = ({ data }) => {
    return (
        <div>
            <RugbyMatchContainer data={data} />
            championshjip
        </div>
    );
};

export default Championship;
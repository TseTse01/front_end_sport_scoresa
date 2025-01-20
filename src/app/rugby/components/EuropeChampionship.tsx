import React from 'react';
import RugbyMatchContainer from './RugbyMatchContainer';
import { RugbyMatchData } from '../types/RugbyMatchData';
interface EuropeChampionshipProps {
    data: RugbyMatchData[];
}
const EuropeChampionship: React.FC<EuropeChampionshipProps> = ({ data }) => {
    console.log(data);
    return (

        <div>
            <RugbyMatchContainer data={data} />
        </div>
    );
};

export default EuropeChampionship;
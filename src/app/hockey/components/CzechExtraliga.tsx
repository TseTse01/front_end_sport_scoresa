import React from 'react';
import { HockeyMatchData } from '../types/HockeyMatchData';
import HockeyMatchContainer from './HockeyMatchContainer';
interface CzechExtraligaProps {
    data: HockeyMatchData[];
}
const CzechExtraliga: React.FC<CzechExtraligaProps> = ({ data }) => {
    return (
        <div>
            <HockeyMatchContainer data={data} />
        </div>
    );
};

export default CzechExtraliga;
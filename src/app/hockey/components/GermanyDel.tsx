import React from 'react';
import { HockeyMatchData } from '../types/HockeyMatchData';
import HockeyMatchContainer from './HockeyMatchContainer';
interface GermanyDelShlProps {
    data: HockeyMatchData[];
}
const GermanyDel: React.FC<GermanyDelShlProps> = ({ data }) => {
    return (
        <div>
            <HockeyMatchContainer data={data} />
        </div>
    );
};

export default GermanyDel;
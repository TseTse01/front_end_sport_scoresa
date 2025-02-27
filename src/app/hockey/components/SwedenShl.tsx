import React from 'react';
import { HockeyMatchData } from '../types/HockeyMatchData';
import HockeyMatchContainer from './HockeyMatchContainer';
interface SwedenShlProps {
    data: HockeyMatchData[];
}
const SwedenShl: React.FC<SwedenShlProps> = ({ data }) => {
    // console.log("gttttt");

    return (
        <div>
            <HockeyMatchContainer data={data} />
        </div>
    );
};

export default SwedenShl;
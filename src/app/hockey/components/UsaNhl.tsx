import React from 'react';
import { HockeyMatchData } from '../types/HockeyMatchData';
import HockeyMatchContainer from './HockeyMatchContainer';
interface UsaNhlShlProps {
    data: HockeyMatchData[];
}
const UsaNhl: React.FC<UsaNhlShlProps> = ({ data }) => {
    return (
        <div>
            <HockeyMatchContainer data={data} />
        </div>
    );
};

export default UsaNhl;
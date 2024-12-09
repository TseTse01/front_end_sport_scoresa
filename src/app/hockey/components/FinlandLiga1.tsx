import React from 'react';
import { HockeyMatchData } from '../types/HockeyMatchData';
import HockeyMatchContainer from './HockeyMatchContainer';
interface FinlandLiga1Props {
    data: HockeyMatchData[];
}
const FinlandLiga1: React.FC<FinlandLiga1Props> = ({ data }) => {
    return (
        <div>
            <HockeyMatchContainer data={data} />
        </div>
    );
};

export default FinlandLiga1;
import React from 'react';
import MmaMatchContainer from './MmaMatchContainer';
import { MmaMatchData } from '../types/MmaMatchData';
interface DataProps {
    data: MmaMatchData[];
}
const Middleweight: React.FC<DataProps> = ({ data }) => {
    return (
        <div>
            <MmaMatchContainer data={data} />
        </div>
    );
};

export default Middleweight;
import React from 'react';
import RugbyMatchContainer from './RugbyMatchContainer';
import { RugbyMatchData } from '../types/RugbyMatchData';
interface Top14Props {
    data: RugbyMatchData[];
}
const Top14: React.FC<Top14Props> = ({ data }) => {
    return (
        <div>
            top14
            <RugbyMatchContainer data={data} />
        </div>
    );
};

export default Top14;
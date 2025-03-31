import React from 'react';
import { idsLeague } from '../props/idsLeague';
import { replaceId } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { useDispatch } from 'react-redux';
interface propsIdsAndName {
    dataLeaguesId: idsLeague;
}
const Competitions: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    const dispatch = useDispatch()
    // console.log(dataLeaguesId);
    const handleRecoverId = () => {
        dispatch(replaceId(dataLeaguesId.id))
    }
    return (
        <>
            <h6
                className='competitionsContainer'
                onClick={handleRecoverId}
            >
                {dataLeaguesId.name}
            </h6>
        </>
    );
};

export default Competitions;
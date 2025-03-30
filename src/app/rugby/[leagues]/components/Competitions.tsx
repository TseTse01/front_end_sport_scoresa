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
        <div>

            <h6
                onClick={handleRecoverId}
                style={{ cursor: 'pointer', color: "blue" }}
            >
                {dataLeaguesId.name}
            </h6>
        </div>

    );
};

export default Competitions;
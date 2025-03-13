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
        // console.log(dataLeaguesId.id, "id here");


    }
    return (
        <div>

            <h6
                onClick={handleRecoverId}
                style={{ cursor: 'pointer', color: "blue" }}
            >
                {dataLeaguesId.leaguename}
            </h6>
        </div>

    );
}

export default Competitions;
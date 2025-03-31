import { idsLeague } from '../props/idsLeague';
import { replaceId } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { useDispatch } from 'react-redux';
interface propsIdsAndName {
    dataLeaguesId: idsLeague;
}

const Competitions: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    const dispatch = useDispatch()

    const handleRecoverId = () => {
        dispatch(replaceId(dataLeaguesId.id))
    }
    return (
        <div className='competitionsContainer'>

            <h6
                onClick={handleRecoverId}
            >
                {dataLeaguesId.leaguename}
            </h6>
        </div>

    );
}

export default Competitions;
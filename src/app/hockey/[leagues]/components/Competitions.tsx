import Link from "next/link";
import { idsLeague } from './idsLeague';
// import { replaceId } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { useDispatch } from 'react-redux';
import { replaceId } from "@/app/GlobalRedux/Features/counter/counterSlice";
interface propsIdsAndName {
    dataLeaguesId: idsLeague;
}

const Competitions: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    const dispatch = useDispatch()
    const handleRecoverId = () => {
        dispatch(replaceId(dataLeaguesId.id))
    }
    return (

        <>
            <h6
                className="competitionsContainer"
                onClick={handleRecoverId}
            >
                {dataLeaguesId.leaguename}
            </h6>
        </>

    );
}

export default Competitions;
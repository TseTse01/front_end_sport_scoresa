import Link from "next/link";
import { idsLeague } from './idsLeague';
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
        // console.log(dataLeaguesId.id);


    }
    return (

        <>
            <h6
                onClick={handleRecoverId}
            >
                <Link href="/hockey/France">{dataLeaguesId.leaguename}</Link>
            </h6>
        </>

    );
}

export default Competitions;
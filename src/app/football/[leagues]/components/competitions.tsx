import { idsLeague } from '../idsLeague';
import { replaceId } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

interface propsIdsAndName {
    dataLeaguesId: idsLeague;
}

const Competitions: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    const dispatch = useDispatch();
    const router = useRouter(); // Utilise useRouter pour naviguer

    const handleRecoverId = () => {
        dispatch(replaceId(dataLeaguesId.id));

        router.push(`/football/${dataLeaguesId.country}/`);
    };

    // console.log(dataLeaguesId, "dataliguesId");

    return (
        <>
            <h6 onClick={handleRecoverId} style={{ cursor: 'pointer', color: "blue" }}>
                {dataLeaguesId.leaguename}
            </h6>
        </>
    );
}

export default Competitions;

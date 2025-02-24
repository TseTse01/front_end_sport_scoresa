import Link from "next/link";
import { idsLeague } from '../idsLeague';
interface propsIdsAndName {
    dataLeaguesId: idsLeague;
}

const Competitions: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    // console.log(dataLeaguesId);

    return (

        <>
            <h6>
                <Link href="/football/England">{dataLeaguesId.leaguename}</Link>
            </h6>
        </>

    );
}

export default Competitions;

import Link from "next/link";
import { idsLeague } from '../idsLeague';
interface propsIdsAndName {
    dataLeaguesId: idsLeague;
}

const Competitions: React.FC<propsIdsAndName> = ({ dataLeaguesId }) => {
    console.log(dataLeaguesId);

    return (
        <div className="footCompetitionsContainer">
            <div className="competitions">
                <h6>
                    <Link href="/football/England">{dataLeaguesId.leaguename}</Link>
                </h6>
                {/* <h6>
                    <Link href="/football/france">Ligue 1</Link>
                </h6>
                <h6>
                    <Link href="/football/italy">Serie A</Link>
                </h6>
                <h6>
                    <Link href="/football/georgia">Erovnuli liga</Link>
                </h6>
                <h6>
                    <Link href="/football/germany">Bundesliga</Link>
                </h6>
                <h6>
                    <Link href="/football/espagne">La liga</Link>
                </h6> */}
            </div>
        </div>
    );
}

export default Competitions;

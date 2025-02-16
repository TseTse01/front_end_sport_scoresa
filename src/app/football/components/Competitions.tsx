
import Link from 'next/link';
function Competitions() {
  // const router = useRouter()
  return (
    <div className="footCompetitionsContainer">
      <div className="competitions">
        <p className="flag-en"></p>
        <h6><Link href="/football/england">Premier league</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-fr"></p>
        <h6><Link href="/football/france">Ligue 1</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-it"></p>
        <h6><Link href="/football/italy">Serie A</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-ge"></p>
        <h6><Link href="/football/georgia">Erovnuli liga</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-de"></p>
        <h6><Link href="/football/germany">Bundesliga</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-es"></p>
        <h6><Link href="/football/espagne">La liga</Link></h6>
      </div>
    </div>
  );
}

export default Competitions;

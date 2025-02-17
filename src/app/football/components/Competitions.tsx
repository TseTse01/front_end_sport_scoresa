
import Link from 'next/link';
function Competitions() {
  // const router = useRouter()
  return (
    <div className="footCompetitionsContainer">
      <div className="competitions">
        <p className="flag-en"></p>
        <h6><Link href="/football/England">Premier league</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-fr"></p>
        <h6><Link href="/football/France">Ligue 1</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-it"></p>
        <h6><Link href="/football/Italy">Serie A</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-ge"></p>
        <h6><Link href="/football/Georgia">Erovnuli liga</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-de"></p>
        <h6><Link href="/football/Germany">Bundesliga</Link></h6>
      </div>
      <div className="competitions">
        <p className="flag-es"></p>
        <h6><Link href="/football/Espagne">La liga</Link></h6>
      </div>
    </div>
  );
}

export default Competitions;

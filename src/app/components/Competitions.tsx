import { useRouter } from 'next/router'

function Competitions() {
  // const router = useRouter()
  return (
    <div className="footCompetitionsContainer">
      <div className="competitions">
        <p className="flag-en"></p>
        {/* <h6>Premier league {router.query.a}</h6> */}
      </div>
      <div className="competitions">
        <p className="flag-fr"></p>
        <h6>Ligue 1</h6>
      </div>
      <div className="competitions">
        <p className="flag-it"></p>
        <h6>Serie A</h6>
      </div>
      <div className="competitions">
        <p className="flag-ge"></p>
        <h6>Erovnuli liga</h6>
      </div>
      <div className="competitions">
        <p className="flag-de"></p>
        <h6>Bundesliga</h6>
      </div>
      <div className="competitions">
        <p className="flag-es"></p>
        <h6>La liga</h6>
      </div>
    </div>
  );
}

export default Competitions;

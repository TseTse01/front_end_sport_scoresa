import Card from "./Card";
import EnglandContainer from "./EnglandContainer";
import NavbarLeagueContainer from "./NavbarLeagueContainer"
const LeagueContainer = () => {
  
  return (
   <div className='leagueContainer'>
    <NavbarLeagueContainer />
    <EnglandContainer />
    <Card />
    <Card />
    <Card />
    <Card />
   </div>
  );
};

export default LeagueContainer;
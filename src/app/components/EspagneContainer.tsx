import React from "react";
import { MatchData } from "../types/MatchData";
import FootballMatchContainer from "../types/FootballMatchContainer";


interface EspagneContainerProps {
  data: MatchData[];  // Le prop attendu
}


const EspagneContainer: React.FC<EspagneContainerProps> = ({ data }) => {

  return (
    <div>
      {<FootballMatchContainer data={data} />}
    </div>
  );
};

export default EspagneContainer;

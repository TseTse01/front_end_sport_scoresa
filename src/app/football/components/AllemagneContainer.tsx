import React from "react";
import { MatchData } from "../types/MatchData";
import FootballMatchContainer from "../types/FootballMatchContainer";



interface AllemagneContainerProps {
  data: MatchData[];
}


const AllemagneContainer: React.FC<AllemagneContainerProps> = ({ data }) => {

  return (
    <div>
      {<FootballMatchContainer data={data} />}
    </div>
  );
};

export default AllemagneContainer;

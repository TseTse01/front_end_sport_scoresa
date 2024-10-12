import React from "react";
import { MatchData } from "../types/MatchData";
import FootballMatchContainer from "../types/FootballMatchContainer";

interface GeorgiaContainerProps {
  data: MatchData[];  // Le prop attendu
}

const GeorgiaContainer: React.FC<GeorgiaContainerProps> = ({ data }) => {

  return (
    <div>
      {<FootballMatchContainer data={data} />}
    </div>
  );
};

export default GeorgiaContainer;

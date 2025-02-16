import React from "react";
import { MatchData } from "../types/MatchData";
import FootballMatchContainer from "../types/FootballMatchContainer";

interface FranceContainerProps {
  data: MatchData[];
}

const FranceContainer: React.FC<FranceContainerProps> = ({ data }) => {

  return (
    <div>
      {<FootballMatchContainer data={data} />}
    </div>
  );
};

export default FranceContainer;

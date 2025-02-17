import React from "react";
import { MatchData } from "../types/MatchData";
import FootballMatchContainer from "../types/FootballMatchContainer";


interface EnglandContainerProps {
  data: MatchData[];
}

const EnglandContainer: React.FC<EnglandContainerProps> = ({ data }) => {
  return (
    <div>
      {<FootballMatchContainer data={data} />}
    </div>
  );
};

export default EnglandContainer;

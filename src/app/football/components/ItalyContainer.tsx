import React from "react";
import { MatchData } from "../types/MatchData";
import FootballMatchContainer from "../types/FootballMatchContainer";


interface ItalyContainerProps {
  data: MatchData[];  // Le prop attendu
}


const ItalyContainer: React.FC<ItalyContainerProps> = ({ data }) => {

  return (
    <div>
      {<FootballMatchContainer data={data} />}
    </div>
  );
};

export default ItalyContainer;

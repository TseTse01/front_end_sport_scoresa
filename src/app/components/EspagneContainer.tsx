import React from "react";
import Star from "./Star";
import Card from "./Card";
import Image from 'next/image'
import { MatchData } from "../types/MatchData";



interface EspagneContainerProps {
  data: MatchData[];  // Le prop attendu
}





const EspagneContainer: React.FC<EspagneContainerProps> = ({ data }) => {

  return (
    <div>

      {data &&
        <div className="navbarCardContainer">
          <div className="items">
            <div className="left">
              <Star />
              <Image src={data[0].league.flag} width={30} height={30} alt="flag england" />
              <p>{data[0].league.country} : {data[0].league.name}</p>
            </div>
            <div className="left">
              <p>Strandings</p>
            </div>
          </div>
          <div>{data.map((el, index) => (
            <Card data={el} key={index} />
          ))}</div>
        </div>
      }
    </div>
  );
};

export default EspagneContainer;

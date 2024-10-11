import React from "react";
import Star from "./Star";
import Card from "./Card";
import { MatchData } from "../types/MatchData";
import Image from 'next/image'
// Typage des props avec l'interface


interface AllemagneContainerProps {
  data: MatchData[];  // Le prop attendu
}





const AllemagneContainer: React.FC<AllemagneContainerProps> = ({ data }) => {
  // console.log(data);




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

export default AllemagneContainer;

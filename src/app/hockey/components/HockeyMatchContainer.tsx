import React from "react";
import Image from "next/image";
import Star from "@/app/football/components/Star";
import { HockeyMatchData } from "../types/HockeyMatchData";
import CardHockey from "./CardHockey";
interface DataProps {
    data: HockeyMatchData[];
}
const HockeyMatchContainer: React.FC<DataProps> = ({ data }) => {
    // console.log(data);



    return (
        <div className="navbarCardContainer hockeynavbarleague">
            <div className="items">
                <div className="left">
                    <Star />
                    <Image
                        src={data[0].league.flag}
                        width={30}
                        height={30}
                        alt={`flag ${data[0].league.flag}`}
                    />
                    <p>
                        {data[0].league.country} : {data[0].league.name}
                    </p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards hockeyCards'
            >{data.map((el, index) => <CardHockey data={el} key={index} />)}
            </div>
        </div>
    );
};

export default HockeyMatchContainer;

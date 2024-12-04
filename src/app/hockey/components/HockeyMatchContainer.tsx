import React from "react";
import Image from "next/image";
import { HockeyMatchData } from "../types/HockeyMatchData";
import Star from "@/app/components/Star";
import CardHockey from "./CardHockey";
interface DataProps {
    data: HockeyMatchData[];
}
const HockeyMatchContainer: React.FC<DataProps> = ({ data }) => {
    return (
        <div className="hockeyCardContainer">
            <div className="items">
                <div className="left">
                    <Star />
                    <Image
                        src={data[0].league.flag}
                        width={30}
                        height={30}
                        alt={`flag ${data[0].league.country}`}
                    />
                    <p>
                        {data[0].league.country} : {data[0].league.name}
                    </p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards'
            >{data.map((el, index) => <CardHockey data={el} key={index} />)}
            </div>
        </div>
    );
};

export default HockeyMatchContainer;

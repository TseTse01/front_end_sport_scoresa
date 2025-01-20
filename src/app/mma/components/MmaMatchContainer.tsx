import React from "react";
import Image from "next/image";
import Star from "@/app/components/Star";
import { MmaMatchData } from "../types/MmaMatchData";
import CardMma from "./CardMma";
// import { Ufc } from '../public/Ufc.svg'
interface DataProps {
    data: MmaMatchData[];
}
const MmaMatchContainer: React.FC<DataProps> = ({ data }) => {



    return (
        <div className="hockeyCardContainer">
            <div className="items">
                <div className="left">
                    <Star />
                    ufc image
                    {/* <Ufc height={40} width={40}  */}
                    <p>
                        {data[0].fixture.category}
                        ss
                    </p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards'
            >{data.map((el, index) => <CardMma data={el} key={index} />)}
            </div>
        </div>
    );
};

export default MmaMatchContainer;
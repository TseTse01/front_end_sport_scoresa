import React from "react";
import Image from "next/image";
import Star from "@/app/components/Star";
import { RugbyMatchData } from "../types/RugbyMatchData";
import CardRugby from "./CardRugby";
interface DataProps {
    data: RugbyMatchData[];
}
const RugbyMatchContainer: React.FC<DataProps> = ({ data }) => {
    console.log(data[0].country.flag);

    return (
        <div className="hockeyCardContainer">
            <div className="items">
                <div className="left">
                    <Star />
                    {
                        data[0].country.flag ? (<Image
                            src={data[0].country.flag}
                            width={30}
                            height={30}
                            alt={`flag of ${data[0].country.name}`}
                        />) : null
                    }

                    <p>
                        {data[0].country.name} : {data[0].league.name}
                    </p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards'
            >{data.map((el, index) => <CardRugby data={el} key={index} />)}
            </div>
        </div>
    );
};

export default RugbyMatchContainer;
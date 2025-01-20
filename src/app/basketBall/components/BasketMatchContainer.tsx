import React from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import Image from "next/image";
import Star from "@/app/components/Star";
import CardBasket from './CardBasket';
interface DataProps {
    data: BasketMatchData[];
}
const BasketMatchContainer: React.FC<DataProps> = ({ data }) => {
    return (
        <div className="navbarCardContainer basket">
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
            <div className='cards'
            >{data.map((el, index) => <CardBasket data={el} key={index} />)}
            </div>
        </div>
    );
};

export default BasketMatchContainer;
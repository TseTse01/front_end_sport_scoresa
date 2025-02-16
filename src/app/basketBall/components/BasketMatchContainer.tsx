"use client";
import React, { useState } from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import Star from "@/app/football/components/Star";
import CardBasket from './CardBasket';
import ImageWithFallback from './ImageWithFallback';

interface DataProps {
    data: BasketMatchData[];
}

const BasketMatchContainer: React.FC<DataProps> = ({ data }) => {
    return (
        <div className="navbarCardContainer basket">
            <div className="items">
                <div className="left">
                    <Star />
                    {data[0].league.flag ? (
                        <ImageWithFallback
                            src={data[0].league.flag}
                            width={30}
                            height={30}
                            alt={`flag ${data[0].league.flag}`}
                            fallback={<span>flag {data[0].league.name}</span>}
                        />
                    ) : (
                        <span>flag {data[0].league.name}</span>
                    )}
                    <p>
                        {data[0].league.country} : {data[0].league.name}
                    </p>
                </div>
                <div className="right">
                    <p>Standings</p>
                </div>
            </div>
            <div className="cards">
                {data.map((el, index) => (
                    <CardBasket data={el} key={index} />
                ))}
            </div>
        </div>
    );
};

export default BasketMatchContainer;
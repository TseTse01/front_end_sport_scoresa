import React from "react";
import Image from "next/image";
import Star from "@/app/football/components/Star";
import { MmaMatchData } from "../types/MmaMatchData";
import CardMma from "./CardMma";
import { useDispatch } from 'react-redux';
import { mmaToggleFavorite } from '@/app/GlobalRedux/Features/counter/favoritesSlice';
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

interface DataProps {
    data: MmaMatchData[];
}
const MmaMatchContainer: React.FC<DataProps> = ({ data }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.footballMatches.some(match =>
            data.some(el => el.fixture.id === match.fixture.id)
        )
    );

    const handleToggleFavorite = () => {
        data.map((el) => dispatch(mmaToggleFavorite(el)))
    }

    return (
        <div className="hockeyCardContainer">
            <div className="items">
                <div className="left">
                    <div className="star"
                        onClick={handleToggleFavorite}
                    >

                        <Star isFavorite={isFavorite} />
                    </div>
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
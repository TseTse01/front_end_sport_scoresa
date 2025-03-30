import React from "react";
import Image from "next/image";
import Star from "@/app/football/components/Star";
import { HockeyMatchData } from "../types/HockeyMatchData";
import CardHockey from "./CardHockey";
import { useDispatch } from 'react-redux';
import { hockeyToggleFavorite } from '@/app/GlobalRedux/Features/counter/favoritesSlice';
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";


interface DataProps {
    data: HockeyMatchData[];
}
const HockeyMatchContainer: React.FC<DataProps> = ({ data }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.hockeyMatches.some(match =>
            data.some(el => el.fixture.id === match.fixture.id)
        )
    );
    const handleRecoverId = () => {
        data.map((el) => dispatch(hockeyToggleFavorite(el)))
    }

    return (
        <div className="navbarCardContainer hockeynavbarleague">
            <div className="items">
                <div className="left">
                    <div className="star"
                        onClick={handleRecoverId}
                    >
                        <Star isFavorite={isFavorite} />
                    </div>
                    <Image
                        src={data[0].league.flag}
                        width={30}
                        height={30}
                        alt={`flag ${data[0].league.flag}`}
                    />
                    <p>
                        {data[0]?.league?.country} : {data[0]?.league?.name}
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

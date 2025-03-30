import React from "react";
import Image from "next/image";
import Star from "@/app/football/components/Star";
import { RugbyMatchData } from "../types/RugbyMatchData";
import CardRugby from "./CardRugby";
import { useDispatch } from "react-redux";
import { rugbyToggleFavorite } from "@/app/GlobalRedux/Features/counter/favoritesSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
interface DataProps {
    data: RugbyMatchData[];
}
const RugbyMatchContainer: React.FC<DataProps> = ({ data }) => {
    // console.log(data[0].country.flag);
    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.rugbyMatches.some(match =>
            data.some(el => el.fixture.id === match.fixture.id)
        )
    );

    const handleToggleFavorite = () => {
        data.map((el) => {
            dispatch(rugbyToggleFavorite(el))
        })
    }

    return (
        <div className="navbarCardContainer rugbyNavbarCardContainer">
            <div className="items">
                <div className="left">
                    <div className="start"
                        onClick={handleToggleFavorite}
                    >
                        <Star isFavorite={isFavorite} />
                    </div>
                    <Image
                        src={data[0].league.logo}
                        width={30}
                        height={30}
                        alt={`flag of ${data[0].country.name}`}
                    />
                    <p>
                        {data[0].country.name} : {data[0].league.name}
                    </p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards cardRugby'
            >{data.map((el, index) => <CardRugby data={el} key={index} />)}
            </div>
        </div>
    );
};

export default RugbyMatchContainer;
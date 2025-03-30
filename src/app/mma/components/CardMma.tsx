import React, { useState, useEffect } from "react";
import { MmaMatchData } from "../types/MmaMatchData";
import Star from "@/app/football/components/Star";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { mmaToggleFavorite } from '@/app/GlobalRedux/Features/counter/favoritesSlice';
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

const CardMma: React.FC<{ data: MmaMatchData }> = ({ data }) => {
    const [matchTime, setMatchTime] = useState<string>("");
    const [winner, setWinner] = useState<string>("0");
    const dispatch = useDispatch();
    const handleToggleFavorite = () => {
        // envoyer Id dans redux
        dispatch(mmaToggleFavorite(data));
    };
    useEffect(() => {
        const timestamp: number = data.fixture.timestamp;
        const date = new Date(timestamp * 1000);

        function formatTime(date: Date): string {
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            return `${hours}:${minutes}`;
        }
        // NS === not started
        if (data.status.short === "NS") {
            setMatchTime(formatTime(date));
            // match finished
        } else if (data.status.short === "FT") {
            setMatchTime("match finished");
            // match live
        } else {
            return;
        }

        // if (data.fighters.first.winner) {
        //     setWinner("winner")
        // } else if (data.fighters.second.winner) {
        //     setWinner("winner")
        // } else {
        //     setWinner("-")
        // }
    }, [data.fixture.timestamp, data.status.short]);

    const isFavorite = useSelector((state: RootState) =>
        state.favorites.mmaMatches.some(match => match.fixture.id === data.fixture.id)
    );
    return (
        <div className="mmaCardContainer">
            <div className="timerContainer">
                <div className="Star" onClick={handleToggleFavorite}>
                    <Star isFavorite={isFavorite} />
                </div>
                <div className="time">{matchTime}</div>
            </div>
            <div className="teamContainer">
                <div className="team">
                    <p>
                        <Image
                            src={data.fighters.first.logo}
                            width={30}
                            height={30}
                            alt={`flag of ${data.fighters.first.name}`}
                        />
                    </p>
                    <p>{data.fighters.first.name}</p>
                </div>
                <div className="team">
                    <p>
                        <Image
                            src={data.fighters.second.logo}
                            width={20}
                            height={20}
                            alt={`flag of ${data.fighters.second.name}`}
                        />
                    </p>
                    <p>{data.fighters.second.name}</p>
                </div>
            </div>
            <div className="scoreContainer">
                <div className="winnerContainer">
                    <p className="home">{data.fighters.first.winner ? "Winner" : "-"}</p>
                    <p className="home">{data.fighters.second.winner ? "Winner" : "-"}</p>
                </div>
            </div>
        </div>
    );
};

export default CardMma;

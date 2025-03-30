import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { footballToggleFavorite } from '@/app/GlobalRedux/Features/counter/favoritesSlice';
import { RootState } from '@/app/GlobalRedux/store';
import Star from './Star';
import Image from 'next/image';
import { MatchData } from '../types/MatchData';
import TvContainer from '@/app/sameComposant/TvContainer';

const Card: React.FC<{ data: MatchData }> = ({ data }) => {
    const [matchTime, setMatchTime] = useState<string>("");
    const [islive, setIsLive] = useState<boolean>(false);
    const dispatch = useDispatch();

    // Vérifie si le match est dans Redux (favoris)
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.footballMatches.some(match => match.fixture.id === data.fixture.id)
    );

    useEffect(() => {
        const timestamp: number = data.fixture.timestamp;
        const date = new Date(timestamp * 1000);

        function formatTime(date: Date): string {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        }

        if (data.fixture.status.short === "NS") {
            setMatchTime(formatTime(date));
        } else if (data.fixture.status.short === "FT") {
            setMatchTime("match finished");
        } else if (data.fixture.status.short === "LIVE" || data.fixture.status.short === '1H') {
            setMatchTime(`${data.fixture.status.elapsed} mins`);
            setIsLive(true);
        } else if (data.fixture.status.short === "HT") {
            setIsLive(true);
            setMatchTime("Halftime");
        } else if (data.fixture.status.short === "2H") {
            setIsLive(true);
            setMatchTime(`${data.fixture.status.elapsed} mins`);
        }
    }, [data.fixture.timestamp, data.fixture.status.short, data.fixture.status.elapsed]);

    const handleToggleFavorite = () => {
        dispatch(footballToggleFavorite(data));
    };


    return (
        <div className='cardContainer'>
            <div className='left'
                onClick={handleToggleFavorite}
            >
                <Star isFavorite={isFavorite} />
                <div className='starAndTimeContainer'>
                    <p className={islive ? 'watch live' : "watch"}>{matchTime}</p>
                </div>
            </div>
            <div className='center'>
                <div className='teamContainer'>
                    <p><Image src={data?.teams?.home?.logo} width={30} height={30} alt={`flag of ${data.teams.home.name}`} /></p>
                    <p>{data.teams.home.name}</p>
                </div>
                <div className={islive ? 'score live' : 'score'}>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.goals.away}</p>
                    <p>:</p>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.goals.home}</p>
                </div>
                <div className='teamContainer'>
                    <p><Image src={data.teams.away.logo} width={30} height={30} alt={`flag ${data.teams.away.name}`} /></p>
                    <p>{data.teams.away.name}</p>
                </div>
            </div>
            <div className='right'>
                <TvContainer />
            </div>
        </div>
    );
};

export default Card;
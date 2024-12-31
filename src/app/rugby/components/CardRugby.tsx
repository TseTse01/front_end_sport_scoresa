import React, { useState, useEffect } from 'react';
import { RugbyMatchData } from '../types/RugbyMatchData';
import Star from '@/app/components/Star';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { recoverIds } from '@/app/GlobalRedux/Features/counter/counterSlice';


const CardRugby: React.FC<{ data: RugbyMatchData }> = ({ data }) => {
    const [matchTime, setMatchTime] = useState<string>("");
    const dispatch = useDispatch();
    useEffect(() => {
        const timestamp: number = data.fixture.timestamp;
        const date = new Date(timestamp * 1000);

        function formatTime(date: Date): string {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        }
        // NS === not started
        if (data.fixture.status.short === "NS") {
            setMatchTime(formatTime(date));
            // match finished
        } else if (data.fixture.status.short === "FT") {
            setMatchTime("match finished");
            // match live
        } else {
            return
        }
    }, [data.fixture.timestamp, data.fixture.status.short,]);



    const handleRecoverId = () => {
        // envoyer Id dans redux 
        // dispatch(recoverIds(data.fixture.id))
        console.log(data.fixture.id);

    }

    return (
        <div className='hockeyCardContainer'>
            <div className='hockeyStar'
                onClick={handleRecoverId}
            >
                <Star />
            </div>
            <div className='time'>{matchTime}</div>
            <div className='teamContainer'>
                <div className='team'>
                    <p><Image src={data.teams.home.logo} width={20} height={20} alt={`flag of ${data.teams.home.name}`} /></p>
                    <p>{data.teams.home.name}</p>
                </div>
                <div className='team'>
                    <p><Image src={data.teams.away.logo} width={20} height={20} alt={`flag of ${data.teams.away.name}`} /></p>
                    <p>{data.teams.away.name}</p>
                </div>
            </div>
            <div className='scoreContainer'>
                <div className='teamHomeScore'>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.home}</p>
                    <p>{data.fixture.periods.first.home == null ? " " : data.fixture.periods.first.home}</p>
                    <p>{data.fixture.periods.second.home == null ? " " : data.fixture.periods.second.home}</p>

                </div>
                <div className='teamAwayScore'>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.away}</p>
                    <p>{data.fixture.periods.first.away == null ? " " : data.fixture.periods.first.away}</p>
                    <p>{data.fixture.periods.second.away == null ? " " : data.fixture.periods.second.away}</p>
                </div>
            </div>
            <div className='publication'></div>
        </div>
    );
};

export default CardRugby;
import React, { useState, useEffect } from 'react';
import { rugbyleagueMatchProps } from '../props/RugbyLeagueMatchProps';
import Star from '@/app/football/components/Star';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
// import { recoverIds } from '@/app/GlobalRedux/Features/counter/counterSlice';

const Card: React.FC<{ data: rugbyleagueMatchProps }> = ({ data }) => {
    // console.log(data, 'data of card container in rugby');

    const [matchTime, setMatchTime] = useState<string>("");
    const dispatch = useDispatch();
    useEffect(() => {
        const timestamp: number = data.timestamp;
        const date = new Date(timestamp * 1000);

        function formatTime(date: Date): string {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
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
            return
        }
    }, [data.timestamp, data.status.short,]);

    const handleRecoverId = () => {

        // console.log(data.id);
        // dispatch(recoverIds(data.id)); 

    }


    return (
        <div className='rugbyCardContainer'>
            <div className='left'
                onClick={handleRecoverId}
            >
                <Star />
                <div className='time'>{matchTime}</div>
            </div>
            <div className='teamContainer'>
                <div className='team'>
                    <Image src={data.teams.home.logo} width={20} height={20} alt={`flag of ${data.teams.home.name}`} />
                    <p>{data.teams.home.name}</p>
                </div>
                <div className='team'>
                    <Image src={data.teams.away.logo} width={20} height={20} alt={`flag of ${data.teams.away.name}`} />
                    <p>{data.teams.away.name}</p>
                </div>
            </div>
            <div className='scoreContainer'>
                <div className='teamScore'>
                    <p>{data.status.short === "NS" ? "0" : data.scores.home}</p>
                    <p>{data.periods.first.home == null ? "-" : data.periods.first.home}</p>
                    <p>{data.periods.second.home == null ? "-" : data.periods.second.home}</p>

                </div>
                <div className='teamScore'>
                    <p>{data.status.short === "NS" ? "0" : data.scores.away}</p>
                    <p>{data.periods.first.away == null ? "-" : data.periods.first.away}</p>
                    <p>{data.periods.second.away == null ? "-" : data.periods.second.away}</p>
                </div>
            </div>
            <div className='publication'></div>
        </div>
    );
};

export default Card;
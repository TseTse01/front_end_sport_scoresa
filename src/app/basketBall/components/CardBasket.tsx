import React, { useState, useEffect } from 'react';
import { BasketMatchData } from '../types/BasketMatchData';
import Star from '@/app/components/Star';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { recoverIds } from '@/app/GlobalRedux/Features/counter/counterSlice';


const CardBasket: React.FC<{ data: BasketMatchData }> = ({ data }) => {
    // console.log(data);
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
        } else if (data.fixture.status.short === "LIVE" || data.fixture.status.short === '1H') {
            setMatchTime(`${data.fixture.status.elepsed} mins`);
        } else if (data.fixture.status.short === "HT") {
            setMatchTime("Halftime")
        }
    }, [data.fixture.timestamp, data.fixture.status.short, data.fixture.status.elepsed]);



    const handleRecoverId = () => {
        // envoyer Id dans redux 
        // dispatch(recoverIds(data.fixture.id))
        console.log(data.fixture.id);

    }

    return (
        <div className='basketCardContainer'>
            <div className="timerContainer">
                <div className='Star'
                    onClick={handleRecoverId}
                >
                    <Star />
                </div>
                <div className='time'>{matchTime}</div>
            </div>
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
                <div className='teamScore'>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.home.total}</p>
                    <p>{data.scores.home.quarter_1 == null ? "-" : data.scores.home.quarter_1}</p>
                    <p>{data.scores.home.quarter_2 == null ? "-" : data.scores.home.quarter_2}</p>
                    <p>{data.scores.home.quarter_3 == null ? "-" : data.scores.home.quarter_3}</p>
                    <p>{data.scores.home.quarter_4 == null ? "-" : data.scores.home.quarter_4}</p>
                    <p>{data.scores.home.over_time == null ? "-" : data.scores.home.over_time}</p>
                </div>
                <div className='teamScore'>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.away.total}</p>
                    <p>{data.scores.away.quarter_1 == null ? "-" : data.scores.away.quarter_1}</p>
                    <p>{data.scores.away.quarter_2 == null ? "-" : data.scores.away.quarter_2}</p>
                    <p>{data.scores.away.quarter_3 == null ? "-" : data.scores.away.quarter_3}</p>
                    <p>{data.scores.away.quarter_4 == null ? "-" : data.scores.away.quarter_4}</p>
                    <p>{data.scores.away.over_time == null ? "-" : data.scores.away.over_time}</p>
                </div>
            </div>
            <div className='publicationContainer'>sss</div>
        </div>
    );
};

export default CardBasket;
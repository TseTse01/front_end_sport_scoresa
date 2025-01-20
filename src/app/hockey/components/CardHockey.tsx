import React, { useState, useEffect } from 'react';
import { HockeyMatchData } from '../types/HockeyMatchData';
import Star from '@/app/components/Star';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { recoverIds } from '@/app/GlobalRedux/Features/counter/counterSlice';



const CardHockey: React.FC<{ data: HockeyMatchData }> = ({ data }) => {
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
            setMatchTime(`${data.fixture.status.elapsed} mins`);
        } else if (data.fixture.status.short === "HT") {
            setMatchTime("Halftime")
        }
    }, [data.fixture.timestamp, data.fixture.status.short, data.fixture.status.elapsed]);



    const handleRecoverId = () => {
        // envoyer Id dans redux 
        // dispatch(recoverIds(data.fixture.id))
        console.log(data.fixture.id);

    }

    return (
        <div className='CardHockeyContainer'>
            <div className="timerContainer">
                <div className='hockeyStar'
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
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.home}</p>
                    <p>{data.fixture.periods.first == null ? "-" : data.fixture.periods.first.substr(0, 1)}</p>
                    <p>{data.fixture.periods.second == null ? "-" : data.fixture.periods.second.substr(0, 1)}</p>
                    <p>{data.fixture.periods.third == null ? "-" : data.fixture.periods.third.substr(0, 1)}</p>
                    <p>{data.fixture.periods.overtime == null ? "-" : data.fixture.periods.overtime.substr(0, 1)}</p>
                    <p>{data.fixture.periods.penalties == null ? "-" : data.fixture.periods.penalties.substr(0, 1)}</p>
                </div>
                <div className='teamScore'>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.away}</p>
                    <p>{data.fixture.periods.first == null ? "-" : data.fixture.periods.first.substr(2, 3)}</p>
                    <p>{data.fixture.periods.second == null ? "-" : data.fixture.periods.second.substr(2, 3)}</p>
                    <p>{data.fixture.periods.third == null ? "-" : data.fixture.periods.third.substr(2, 3)}</p>
                    <p>{data.fixture.periods.overtime == null ? "-" : data.fixture.periods.overtime.substr(2, 3)}</p>
                    <p>{data.fixture.periods.penalties == null ? "-" : data.fixture.periods.penalties.substr(2, 3)}</p>
                </div>
            </div>
            <div className='publication'>ss</div>
        </div>
    );
};

export default CardHockey;
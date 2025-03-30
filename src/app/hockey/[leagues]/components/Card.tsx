import React, { useState, useEffect } from 'react';
import { Match } from './propsMatchData';
import Star from '@/app/football/components/Star';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
// import { recoverIds } from '@/app/GlobalRedux/Features/counter/counterSlice';



const CardHockey: React.FC<{ data: Match }> = ({ data }) => {

    const [matchTime, setMatchTime] = useState<string>("");
    const dispatch = useDispatch();

    const handleRecoverId = () => {
        // envoyer Id dans redux 
        // dispatch(recoverIds(data.fixture.id))
        console.log(data.fixture.id);

    }
    const formatDate = (dateString: string): string => {
        const dateParts = dateString.split("-");
        if (dateParts.length === 3) {
            return `${dateParts[1]}.${dateParts[2]}`;
        }
        return dateString; // Retourner la date d'origine si le format n'est pas correct
    };

    return (
        <div className='CardHockeyContainer'>
            <div className="timerContainer">
                <div className='hockeyStar'
                    onClick={handleRecoverId}
                >
                    <p>{formatDate(data.fixture.date)}</p>
                </div>
                {/* <div className='time'>{data.fixture.timestamp}</div> */}
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
                    <p>{data.periods.first == null ? "-" : data.periods.first.substr(0, 1)}</p>
                    <p>{data.periods.second == null ? "-" : data.periods.second.substr(0, 1)}</p>
                    <p>{data.periods.third == null ? "-" : data.periods.third.substr(0, 1)}</p>
                    <p>{data.periods.overtime == null ? "-" : data.periods.overtime.substr(0, 1)}</p>
                    <p>{data.periods.penalties == null ? "-" : data.periods.penalties.substr(0, 1)}</p>
                </div>
                <div className='teamScore'>
                    <p>{data.fixture.status.short === "NS" ? "0" : data.scores.away}</p>
                    <p>{data.periods.first == null ? "-" : data.periods.first.substr(2, 3)}</p>
                    <p>{data.periods.second == null ? "-" : data.periods.second.substr(2, 3)}</p>
                    <p>{data.periods.third == null ? "-" : data.periods.third.substr(2, 3)}</p>
                    <p>{data.periods.overtime == null ? "-" : data.periods.overtime.substr(2, 3)}</p>
                    <p>{data.periods.penalties == null ? "-" : data.periods.penalties.substr(2, 3)}</p>
                </div>
            </div>
            <div className='publication'>ss</div>
        </div>
    );
};

export default CardHockey;
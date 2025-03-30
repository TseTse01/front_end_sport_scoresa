import React, { useState, useEffect } from 'react';
import Star from '../../components/Star';
import Image from 'next/image';
import { Match } from '../propsMatchData';
import { recoverIds } from '../../../GlobalRedux/Features/counter/counterSlice';
import { useDispatch } from 'react-redux';
const Card: React.FC<{ data: Match }> = ({ data }) => {

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
        setMatchTime(formatTime(date));

    }, [data.fixture.timestamp]);
    // Dépendances qui déclenchent l'update
    const handleRecoverId = () => {

        dispatch(recoverIds(data.fixture.id))
    }
    const formatDate = (dateString: string): string => {
        const dateParts = dateString.split("-");
        if (dateParts.length === 3) {
            return `${dateParts[1]}.${dateParts[2]}`;
        }
        return dateString; // Retourner la date d'origine si le format n'est pas correct
    };
    return (
        <div className='cardContainer'>
            <div className='left'
                onClick={handleRecoverId}
            >
                <p>{formatDate(data.fixture.date)}</p>
                <div className='starAndTimeContainer'>
                    <p className="watch">{matchTime}</p>
                </div>
            </div>
            <div className='center'>
                <div className='teamContainer'>
                    <p><Image src={data.teams.home.logo} width={30} height={30} alt={`flag of ${data.teams.home.name}`} /></p>
                    <p>{data.teams.home.name}</p>
                </div>
                <div className={'score'}>
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
                sss
            </div>
        </div >
    );
};

export default Card;
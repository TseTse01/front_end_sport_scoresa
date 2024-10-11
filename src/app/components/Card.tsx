import React from 'react';
import Star from './Star';
import { log } from 'console';
import Image from 'next/image'
import { MatchData } from '../types/MatchData';


const Card: React.FC<{ data: MatchData }> = ({ data }) => {
    const timestamp: number = data.fixture.timestamp;
    // Convertir le timestamp en millisecondes
    const date = new Date(timestamp * 1000);
    // Fonction pour extraire uniquement l'heure
    function formatTime(date: Date): string {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}`;
    }

    return (
        <div className='cardContainer'>
            <div className='matchCotnainer'>
                <Star />
                <p>{formatTime(date)}</p>
                <div className='teams'>
                    <div className='teamContainer'>
                        <p><Image src={data.teams.away.logo} width={30} height={30} alt="flag england" /></p>
                        <p>{data.teams.away.name}</p>
                    </div>
                    <div className='score'>
                        <p>{data.goals.away}</p>
                        <p>:{data.goals.home}</p>
                    </div>
                    <div className='teamContainer'>
                        <p><Image src={data.teams.home.logo} width={30} height={30} alt="flag england" /></p>
                        <p>{data.teams.home.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
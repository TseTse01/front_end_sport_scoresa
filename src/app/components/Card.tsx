import React from 'react';
import Star from './Star';

const Card = () => {
    return (
        <div className='cardContainer'>
            <div className='matchCotnainer'>
                <Star />
                <p>time</p>
                <div className='teams'>
                   <div className='teamContainer'>
                        <p>logoEquipe</p>
                        <p> teamName</p>
                    </div> 
                    <div className='score'>
                        <p>0 :</p>
                        <p>0</p>
                    </div>
                   <div className='teamContainer'>
                        <p>logoEquipe</p>
                        <p> teamName</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Card;
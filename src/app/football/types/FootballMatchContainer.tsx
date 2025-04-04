import * as React from 'react';
import Image from 'next/image';
import Star from '../components/Star';
import Card from '../components/Card';
import { MatchData } from './MatchData';
import { footballToggleFavorite } from "../../GlobalRedux/Features/counter/favoritesSlice"
import { RootState } from '@/app/GlobalRedux/store';
import { useDispatch, useSelector } from 'react-redux';
interface DataProps {
    data: MatchData[];
}
const FootballMatchContainer: React.FC<DataProps> = ({ data }) => {
    const dispatch = useDispatch()
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.footballMatches.some(match =>
            data.some(el => el.fixture.id === match.fixture.id)
        )
    );

    const handleToggleFavorite = () => {
        data.map((el) => {
            dispatch(footballToggleFavorite(el))
        })
    }

    return (
        <div className="navbarCardContainer"
        >
            <div className="items">
                <div className="left"
                    onClick={handleToggleFavorite}
                >
                    <Star isFavorite={isFavorite}
                    />
                    <div className='image'>
                        <Image src={data[0].league.flag} width={30} height={30} alt={`flag ${data[0].league.country}`} />
                    </div>
                    <div className="leagueName">
                        <p>{data[0].league.country} : {data[0].league.name}</p>
                    </div>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cardsFootball'
            >{data.map((el, index) => <Card data={el} key={index} />)}</div>
        </div >
    );
};

export default FootballMatchContainer;
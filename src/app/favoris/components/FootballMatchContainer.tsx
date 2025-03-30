import DynamicImage from '@/app/football/[leagues]/components/DynamicImage';
import Card from '@/app/football/components/Card';
import Star from '@/app/football/components/Star';
import { MatchData } from '@/app/football/types/MatchData';
import { footballToggleFavorite } from '@/app/GlobalRedux/Features/counter/favoritesSlice';
import { RootState } from '@/app/GlobalRedux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface DataProps {
    data: MatchData[];
}
const FootballMatchContainer: React.FC<DataProps> = ({ data }) => {
    const dispatch = useDispatch();
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
        <div>
            <div className="items">
                <div className="left"
                    onClick={handleToggleFavorite}
                >
                    <Star isFavorite={isFavorite}
                    />
                    <div className='image'>
                        <DynamicImage src={"ball_football.svg"} alt={"ball of football"} className="footballSvg" />
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
            >{data && data.map((el, index) => <Card data={el} key={index} />)}</div>
        </div>
    );
};

export default FootballMatchContainer;
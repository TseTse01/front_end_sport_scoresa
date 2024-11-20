import * as React from 'react';
import Image from 'next/image';
import Star from '../components/Star';
import Card from '../components/Card';
import { MatchData } from './MatchData';
import { recoverIds } from "../GlobalRedux/Features/counter/counterSlice"
import { useDispatch } from 'react-redux';
interface DataProps {
    data: MatchData[];
}
const FootballMatchContainer: React.FC<DataProps> = ({ data }) => {
    const dispatch = useDispatch()
    const handleRecoverId = () => {
        data.map((el) => {
            dispatch(recoverIds(el.fixture.id))
        })
    }
    return (
        <div className="navbarCardContainer"
        >
            <div className="items">
                <div className="left"
                    onClick={handleRecoverId}
                >
                    <Star
                    />
                    <Image src={data[0].league.flag} width={30} height={30} alt={`flag ${data[0].league.country}`} />
                    <p>{data[0].league.country} : {data[0].league.name}</p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards'
            >{data.map((el, index) => <Card data={el} key={index} />)}</div>
        </div >
    );
};

export default FootballMatchContainer;
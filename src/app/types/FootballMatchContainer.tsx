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
    const ref = React.useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const handleRecoverUseRef = () => {
        // console.log(data);
        data.map((el) => {
            // console.log(el.fixture.id);
            dispatch(recoverIds(el.fixture.id))
        })

    }
    return (
        <div className="navbarCardContainer"
            onClick={handleRecoverUseRef}
            ref={ref}
        >
            <div className="items">
                <div className="left">
                    <Star />
                    <Image src={data[0].league.flag} width={30} height={30} alt={`flag ${data[0].league.country}`} />
                    <p>{data[0].league.country} : {data[0].league.name}</p>
                </div>
                <div className="right">
                    <p>Strandings</p>
                </div>
            </div>
            <div className='cards'
                onClick={() => {
                    console.log("hello");
                }}
            >{data.map((el, index) => <Card data={el} key={index} />)}</div>
        </div >
    );
};

export default FootballMatchContainer;
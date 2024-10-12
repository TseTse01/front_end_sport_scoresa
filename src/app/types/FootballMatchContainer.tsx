import Image from 'next/image';
import Star from '../components/Star'; // Assurez-vous d'importer correctement l'icône ou le composant Star
import Card from '../components/Card'; // Si Card est également un composant externe
import { MatchData } from './MatchData';
interface DataProps {
    data: MatchData[];
}
const FootballMatchContainer: React.FC<DataProps> = ({ data }) => {
    return (
        <div className="navbarCardContainer">
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
            <div className='cards' >{data.map((el, index) => <Card data={el} key={index} />)}</div>
        </div>
    );
};

export default FootballMatchContainer;
import React from 'react';
import { MmaMatchData } from '../../types/MmaMatchData'
import DynamicImage from '../../../football/[leagues]/components/DynamicImage';

interface data {
    data: MmaMatchData[];
}
const MmaNavbarLeague: React.FC<data> = ({ data }) => {
    const formatSeason = (season: string): string => {
        let date = season.split("-")[0]
        // console.log(date);

        return `${date}-${Number(date) + 1}`;
    };

    console.log("tsetse");

    console.log(data, "data of navbar");

    return (
        // <div className="tsetse">sisiko</div>
        <div className='navbarLeagueLeft'>
            <div className='flex flex1'>
                <DynamicImage src={"/mma.svg"} alt={"MMA logo"} className={"svgFlag"} />
                <span>MMA</span>
                <p className='svgflash'></p>
                <span>{data[0].fixture.category.toUpperCase()}</span>
            </div>
            <div className='flex'>
                <div className='logoLeft'>
                    <DynamicImage src={"/ufcnavbarlogo.png"} alt={"logo of UFC"} className={"svgologo"} />
                </div>
                <div className="center">
                    <h5>{data[0].fixture.slug}</h5>
                    <h6>{formatSeason(data[0].fixture.date)}</h6>
                </div>
                <div className="right">
                    <p className='svg'></p>
                </div>
            </div>
            <div className='flex'>
                <div className="container3">SUMMARY</div>
                <div className="container3">NEWS</div>
                <div className="container3">RESULTS</div>
                <div className="container3">FIXTURES</div>
                <div className="container3">STANDINGS</div>
                <div className="container3">ARCHIVE</div>
            </div>
        </div>
    );
};

export default MmaNavbarLeague;
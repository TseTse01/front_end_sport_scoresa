import React from 'react';
import { idsLeague } from '../idsLeague';
import DynamicImage from './DynamicImage';
interface propsIdsAndName {
    data: idsLeague;
}


const NavbarLeague: React.FC<propsIdsAndName> = ({ data }) => {
    const formatSeason = (start: string, end: string): string => {
        return `${start.split("-")[0]}-${end.split("-")[0]}`;
    };
    console.log(data);

    return (
        <div className='navbarLeagueLeft'>
            <div className='flex flex1'>
                <p className='svgball'></p>
                <span>FOOTBALL</span>
                <p className='svgflash'></p>
                <DynamicImage src={data.flag ? data.flag : ""} alt={data.country ? data.country + "flag" : "flag"} className={"svgFlag"} />
                <span>{data.country.toUpperCase()}</span>
            </div>
            <div className='flex'>
                <div className='logoLeft'>
                    <DynamicImage src={data.logo} alt={data.leaguename ? data.leaguename + "logo" : "logo of" + data.country} className={"svgologo"} />
                </div>
                <div className="center">
                    <h5>{data.leaguename}</h5>
                    <h6>{formatSeason(data.start, data.end)}</h6>
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

export default NavbarLeague;
import React from 'react';
import { idsLeague } from '../idsLeague';
import DynamicImage from './DynamicImage';
interface propsIdsAndName {
    data: idsLeague;
}


const NavbarLeague: React.FC<propsIdsAndName> = ({ data }) => {
    console.log(data);
    const formatSeason = (start: string, end: string): string => {
        return `${start.split("-")[0]}-${end.split("-")[0]}`;
    };
    return (
        <div className='navbarLeague'>
            <div className='flex1'>
                <p className='svgball'></p>
                <span>FOOTBALL</span>
                <p className='svgflash'></p>
                {/* <DynamicImage src={data.flag} alt={data.country ? data.country + "flag" : "flag"} className={"svgFlag"} />
                <span>{data.country.toUpperCase()}</span> */}
            </div>
            {/* <div className='flex2'>
                <div className='logoLeft'>
                    <DynamicImage src={data.logo} alt={data.leaguename ? data.leaguename + "logo" : "logo of" + data.country} className={"svgologo"} />
                </div>
                <div className="center">
                    <h3>{data.leaguename}</h3>
                    <h6>{formatSeason(data.start, data.end)}</h6>
                </div>
                <div className="right">
                    <p className='svg'></p>
                </div>
            </div> */}
            <div className='flex3'>
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
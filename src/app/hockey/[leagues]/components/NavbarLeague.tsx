import React from 'react';
import DynamicImage from '../../../football/[leagues]/components/DynamicImage';
import { Match } from './propsMatchData';
interface LeagueData {
    data: Match;
}

const NavbarLeague: React.FC<LeagueData> = ({ data }) => {
    const formatSeason = (season: number): string => {
        return `${season}-${season + 1}`;
    };

    // console.log(data, "ee");

    return (
        <div className='navbarLeagueLeft'>
            <div className='flex flex1'>
                <p className='svgball'></p>
                <span>HOCKEY</span>
                <p className='svgflash'></p>
                <DynamicImage src={data.country.flag ? data.country.flag : ""} alt={data.country.name ? data.country.name + "flag" : "flag"} className={"svgFlag"} />
                <span>{data.country.name.toUpperCase()}</span>
            </div>
            <div className='flex'>
                <div className='logoLeft'>
                    <DynamicImage src={data.league.logo} alt={data.league.name ? data.league.name + "logo" : "logo of" + data.country.name} className={"svgologo"} />
                </div>
                <div className="center">
                    <h5>{data.league.name}</h5>
                    <h6>{formatSeason(data.league.season)}</h6>
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
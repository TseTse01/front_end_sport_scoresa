import React from 'react';
import Link from 'next/link';
import DynamicImage from '../football/[leagues]/components/DynamicImage';

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className="categories">
                <div className="cardCategories">
                    <div className="title">FOOTBALL</div>
                    <div className="category">
                        <div>Ligue 1</div>
                        <div>Premier League</div>
                        <div>LaLIga EA Sports</div>
                        <div>Seria A</div>
                        <div>Bundesliga</div>
                    </div>
                </div>
                <div className="cardCategories">
                    <div className="title">TRENDING</div>
                    <div className="category">
                        <div>NBA 2025</div>
                        <div>NHL2025</div>
                        <div>Ligue 1</div>
                        <div>TOP 14</div>
                        <div>ExtraLiga</div>
                    </div>
                </div>
                <div className="cardCategories">
                    <div className="title">FOLLOW ME</div>
                    <div className="category">
                        <div className='svgContactContainer'>

                            <Link href="https://www.linkedin.com/in/davit-tsetsadze-422ab12a0/" target="_blank" rel="noopener noreferrer" className="svglink">
                                <DynamicImage src={"/contact/linkedin.svg"} alt={"Github"} className={"svgContact"} />
                            </Link>
                        </div>
                        <div className='svgContactContainer'>
                            <Link href="https://github.com/TseTse01" target="_blank" rel="noopener noreferrer" className="svglink">
                                <DynamicImage src={"/contact/github.svg"} alt={"Linkedin"} className={"svgContact"} />
                            </Link>
                        </div>
                        <div className='svgContactContainer'>

                            <Link href="https://github.com/TseTse01" target="_blank" rel="noopener noreferrer" className="svglink">
                                <DynamicImage src={"/contact/portfolio.svg"} alt={"Portfolio"} className={"svgContact"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cardCategories">
                    <div className="title">MOBILE APPLICATION</div>
                    <div className="category">
                        <div>Our mobile app is optimized for youtr phone.Download it for free!</div>
                        <div>image</div>
                        <div>image</div>
                        <div>image</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
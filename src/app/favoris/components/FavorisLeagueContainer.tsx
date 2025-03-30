import React from "react";
import { useEffect, useState } from "react";
import { useSelector, } from "react-redux";
import { RootState } from "../../GlobalRedux/store";
import NavbarLeagueContainer from "@/app/football/components/NavbarLeagueContainer";
import FootballMatchContainer from "@/app/football/types/FootballMatchContainer";
import BasketMatchContainer from "@/app/basketBall/components/BasketMatchContainer";
import RugbyMatchContainer from "@/app/rugby/components/RugbyMatchContainer";
import HockeyMatchContainer from "@/app/hockey/components/HockeyMatchContainer";
import MmaMatchContainer from "@/app/mma/components/MmaMatchContainer";

const FavorisLeagueContainer: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
    const footballMatch = useSelector((state: RootState) => state.favorites.footballMatches)
    const basketballMatches = useSelector((state: RootState) => state.favorites.basketballMatches)
    const hockeymatches = useSelector((state: RootState) => state.favorites.hockeyMatches)
    const rugbymatches = useSelector((state: RootState) => state.favorites.rugbyMatches)
    const mmaMatches = useSelector((state: RootState) => state.favorites.mmaMatches)


    function getCurrentDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // Fonction pour gérer le changement de date via l'input
    const handleDateChange = (newDate: string) => {
        setCurrentDate(newDate);
    };

    useEffect(() => {

        setCurrentDate(getCurrentDate());
    }, []);

    const NoMatch = <div>haliludia</div>;

    return (
        <div className="leagueContainer">
            {/* <div className="navbarLeague">
                <NavbarLeagueContainer currentDate={currentDate} onDateChange={handleDateChange} />
            </div> */}
            <div className="football-container league">
                {footballMatch.length > 0 ? (
                    <div className="sportSName">
                        <h3>ALL Football Matches</h3>
                        <FootballMatchContainer data={footballMatch} />
                    </div>) : ""}
                {basketballMatches.length > 0 ? (
                    <div className="sportSName">
                        <h3>ALL BasketBall Matches</h3>
                        <BasketMatchContainer data={basketballMatches} />
                    </div>) : ""}
                {rugbymatches.length > 0 ? (
                    <div className="sportSName">
                        <h3>ALL Rugby Matches</h3>
                        <RugbyMatchContainer data={rugbymatches} />
                    </div>) : ""}
                {hockeymatches.length > 0 ? (
                    <div className="sportSName">
                        <h3>ALL Hockey Matches</h3>
                        <HockeyMatchContainer data={hockeymatches} />
                    </div>
                ) : ""}
                {mmaMatches.length > 0 ? (
                    <div className="sportSName">
                        <h3>ALL MMA Matches</h3>
                        <MmaMatchContainer data={mmaMatches} />
                    </div>) : ""}
            </div>
        </div>
    );
};

export default FavorisLeagueContainer;


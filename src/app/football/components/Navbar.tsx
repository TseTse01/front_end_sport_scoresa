"use client";
import Star from "./Star";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';

const Navbar = () => {
    const footballMatch = useSelector((state: RootState) => state.favorites.footballMatches)
    const basketballMatches = useSelector((state: RootState) => state.favorites.basketballMatches)
    const hockeymatches = useSelector((state: RootState) => state.favorites.hockeyMatches)
    const rugbymatches = useSelector((state: RootState) => state.favorites.rugbyMatches)
    const mmaMatches = useSelector((state: RootState) => state.favorites.mmaMatches)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);



    return (
        <div className="NavbarContainer">
            <div className="navlink star">
                <Link href="/favoris" className="favoris">
                    <span>Favoris</span><Star />
                    <span className="numberFavorisId">{(footballMatch.length + basketballMatches.length + hockeymatches.length + rugbymatches.length + mmaMatches.length).toString()}</span>
                </Link>
            </div>
            <div className="navlink">
                <Link href="/" className="favoris">
                    <span>Football</span>
                </Link>
            </div>
            <div className="navlink">
                <Link href="/rugby" className="favoris">
                    <span>Rugby</span>
                </Link>
            </div>
            <div className="navlink">
                <Link href="/basketBall" className="favoris">
                    <span>BasketBall</span>
                </Link>
            </div>
            <div className="navlink">
                <Link href="/mma" className="favoris">
                    <span>MMA</span>
                </Link>
            </div>
            <div className="navlink">
                <Link href="/hockey" className="favoris">
                    <span>Hockey</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
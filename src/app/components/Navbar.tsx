import Star from "./Star";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';

const Navbar = () => {
    const fullIds = useSelector((state: RootState) => state.counter.value.ids)

    return (
        <div className="NavbarContainer">
            <div className="navlink star">
                <Link href="/favoris" className="favoris">
                    <span>Favoris</span><Star /><span className="numberFavorisId">{fullIds.length}</span>
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
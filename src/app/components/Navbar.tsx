import Star from "./Star";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="NavbarContainer">
            <div>
                <Link href="/favoris" className="favoris">
                    <span>Favoris</span><Star />
                </Link>
            </div>
            <div className="navlink">Football</div>
            <div className="navlink">Rugby</div>
            <div className="navlink">BasketBall</div>
            <div className="navlink">MMA</div>
            <div className="navlink">Hockey</div>
        </div>
    );
};

export default Navbar;
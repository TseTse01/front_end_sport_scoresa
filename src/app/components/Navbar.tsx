import Star from "./Star";

const Navbar = () => {
    return (
        <div className="NavbarContainer">
            <div className="favoris"><span>Favoris </span><Star /></div>
            <div className="navlink">Football</div>
            <div className="navlink">Rugby</div>
            <div className="navlink">BasketBall</div>
            <div className="navlink">MMA</div>
            <div className="navlink">Hockey</div>
        </div>
    );
};

export default Navbar;